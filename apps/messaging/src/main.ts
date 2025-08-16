import { NestFactory } from '@nestjs/core';
import { MessagingModule } from './messaging.module';
import { Logger } from '@nestjs/common';
import { SharedService } from '../../../libs/shared/src';

async function bootstrap() {
  const logger = new Logger('Messaging Service');
  const app = await NestFactory.create(MessagingModule);

  try {
    // Get services
    const sharedService = app.get<SharedService>(SharedService);

    // Get queue name from config
    const queue = process.env.RABBITMQ_MESSAGING_QUEUE || 'messaging-queue';

    // Connect to RabbitMQ
    app.connectMicroservice(sharedService.getRmqOptions(queue));

    // Start all microservices
    await app.startAllMicroservices();
  } catch (error) {
    logger.error('Failed to start Messaging service:', error);
    process.exit(1);
  }
}

void bootstrap();
