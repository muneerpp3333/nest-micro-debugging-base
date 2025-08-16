import { DynamicModule, Module, Logger } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { SharedRbtmqService } from './shared-rbtmq.service';

@Module({
  providers: [SharedRbtmqService],
  exports: [SharedRbtmqService],
})
export class SharedRbtmqModule {
  static registerRmq(service: string, queue: string): DynamicModule {
    const providers = [
      {
        provide: service,
        useFactory: (configService: ConfigService) => {
          const user = configService.get<string>('RABBITMQ_USERNAME') || 'guest';
          const password = configService.get<string>('RABBITMQ_PASSWORD') || 'guest';
          const host = configService.get<string>('RABBITMQ_HOST') || 'localhost';
          const port = configService.get<number>('RABBITMQ_PORT') || 5672;

          const clientProxy = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
              urls: [`amqp://${user}:${password}@${host}:${port}`],
              queue,
              queueOptions: {
                durable: true,
              },
            },
          });

          clientProxy
            .connect()
            .then(() => {
              Logger.log(`Connected to RabbitMQ: ${queue}`, 'SharedRbtmqModule');
            })
            .catch((error) => {
              Logger.error(
                `Error connecting to RabbitMQ: ${error}`,
                'SharedRbtmqModule',
              );
            });

          return clientProxy;
        },
        inject: [ConfigService],
      },
    ];

    return {
      module: SharedRbtmqModule,
      providers: [...providers, SharedRbtmqService],
      exports: [...providers, SharedRbtmqService],
    };
  }
}
