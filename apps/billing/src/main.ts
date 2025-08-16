import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { Logger } from '@nestjs/common';
import { SharedService } from '../../../libs/shared/src';

async function bootstrap() {
  const logger = new Logger('Billing Service');
  const app = await NestFactory.create(BillingModule);

  try {
    // Get services
    const sharedService = app.get<SharedService>(SharedService);

    // Get queue name from config
    const queue = process.env.RABBITMQ_BILLING_QUEUE || 'billing-queue';

    // Connect to RabbitMQ
    await Promise.all([
      app.connectMicroservice(sharedService.getRmqOptions(queue)),
      app.startAllMicroservices(),
    ]);

    await app.init();
    logger.log('Billing service started');
  } catch (error) {
    logger.error('Failed to start Billing service:', error);
    process.exit(1);
  }
}

void bootstrap();
