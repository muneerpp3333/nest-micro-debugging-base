import { Injectable } from '@nestjs/common';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { SharedServiceInterface } from './shared.service.interface';

@Injectable()
export class SharedRbtmqService implements SharedServiceInterface {
  constructor(private readonly configService: ConfigService) {}

  getRmqOptions(queue: string): RmqOptions {
    const host = this.configService.get<string>('RABBITMQ_HOST') || 'localhost';
    const port = this.configService.get<number>('RABBITMQ_PORT') || 5672;
    const username = this.configService.get<string>('RABBITMQ_USERNAME') || 'guest';
    const password = this.configService.get<string>('RABBITMQ_PASSWORD') || 'guest';
    const RABBITMQ_URI = `amqp://${username}:${password}@${host}:${port}`;

    return {
      transport: Transport.RMQ,
      options: {
        urls: [RABBITMQ_URI],
        noAck: false,
        queue,
        queueOptions: {
          durable: true,
        },
      },
    };
  }

  acknowledgeMessage(context: RmqContext): void {
    const channel = context.getChannelRef() as {
      ack: (message: unknown) => void;
    };
    const message = context.getMessage();
    channel.ack(message);
  }
}
