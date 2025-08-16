import { NestFactory } from '@nestjs/core';
import { ListingModule } from './listing.module';
import { Logger } from '@nestjs/common';
import { SharedService } from '../../../libs/shared/src';

async function bootstrap() {
  const logger = new Logger('Listing Service');
  const app = await NestFactory.create(ListingModule);

  try {
    // Get services
    const sharedService = app.get<SharedService>(SharedService);

    // Get queue name from config
    const queue = process.env.RABBITMQ_LISTING_QUEUE || 'listing-queue';

    // Connect to RabbitMQ
    await Promise.all([
      app.connectMicroservice(sharedService.getRmqOptions(queue)),
      app.startAllMicroservices(),
    ]);

    await app.init();
    logger.log('Listing service started');
  } catch (error) {
    logger.error('Failed to start Listing service:', error);
    process.exit(1);
  }
}

void bootstrap();
