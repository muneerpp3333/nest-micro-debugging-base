import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';
import { SharedModule, SharedService } from '../../../libs/shared/src';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SharedModule,
  ],
  controllers: [ListingController],
  providers: [ListingService, SharedService],
})
export class ListingModule {}
