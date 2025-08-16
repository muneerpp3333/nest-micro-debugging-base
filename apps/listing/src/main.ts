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
    app.connectMicroservice(sharedService.getRmqOptions(queue));
    
    // Start all microservices
    await app.startAllMicroservices();
    
    // For debugging and health checks, also listen on HTTP port (optional)
    const port = process.env.LISTING_PORT || 5002;
    await app.listen(port);
    
    logger.log(`Listing service started on port ${port} (HTTP) and listening to RabbitMQ queue: ${queue}`);
  } catch (error) {
    logger.error('Failed to start Listing service:', error);
    process.exit(1);
  }
}

void bootstrap();
