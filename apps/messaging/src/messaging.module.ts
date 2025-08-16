import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessagingController } from './messaging.controller';
import { MessagingService } from './messaging.service';
import { SharedModule, SharedService } from '../../../libs/shared/src';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SharedModule,
  ],
  controllers: [MessagingController],
  providers: [MessagingService, SharedService],
})
export class MessagingModule {}
