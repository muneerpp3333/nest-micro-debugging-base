import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { SharedModule, SharedService } from '../../../libs/shared/src';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SharedModule,
  ],
  controllers: [BillingController],
  providers: [BillingService, SharedService],
})
export class BillingModule {}
