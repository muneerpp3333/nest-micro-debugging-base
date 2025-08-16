import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SharedService } from '../../../libs/shared/src';

async function bootstrap() {
  const logger = new Logger('AI-SDR Service');
  const app = await NestFactory.create(AppModule);

  try {
    // Get services
    const sharedService = app.get<SharedService>(SharedService);

    // Get queue name from config
    const queue = process.env.RABBITMQ_AI_SDR_QUEUE || 'ai-sdr-queue';

    // Connect to RabbitMQ
    await Promise.all([
      app.connectMicroservice(sharedService.getRmqOptions(queue)),
      app.startAllMicroservices(),
    ]);

    await app.init();
    logger.log('AI-SDR service started');
  } catch (error) {
    logger.error('Failed to start AI-SDR service:', error);
    process.exit(1);
  }
}

void bootstrap();
