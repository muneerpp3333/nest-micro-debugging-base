import { DynamicModule, Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { SharedService } from '../services/shared.service';

@Module({
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {
  static registerRmq(service: string, queue: string): DynamicModule {
    const providers = [
      {
        provide: service,
        useFactory: (configService: ConfigService) => {
          const host =
            configService.get<string>('RABBITMQ_HOST') || 'localhost';
          const port = configService.get<number>('RABBITMQ_PORT') || 5673;
          const username =
            configService.get<string>('RABBITMQ_USERNAME') || 'guest';
          const password =
            configService.get<string>('RABBITMQ_PASSWORD') || 'guest';
          const RABBITMQ_URI = `amqp://${username}:${password}@${host}:${port}`;

          const clientProxy = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
              urls: [RABBITMQ_URI],
              queue,
              queueOptions: {
                durable: true,
              },
            },
          });

          clientProxy
            .connect()
            .then(() => {
              Logger.log(`Connected to RabbitMQ: ${queue}`, 'SharedModule');
            })
            .catch((error) => {
              Logger.error(
                `Error connecting to RabbitMQ: ${error}`,
                'SharedModule',
              );
            });

          return clientProxy;
        },
        inject: [ConfigService],
      },
    ];

    return {
      module: SharedModule,
      providers: [...providers, SharedService],
      exports: [...providers, SharedService],
    };
  }
}
