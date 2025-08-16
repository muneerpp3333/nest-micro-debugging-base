import { Module } from '@nestjs/common';
import { SharedQueueService } from './shared-queue.service';

@Module({
  providers: [SharedQueueService],
  exports: [SharedQueueService],
})
export class SharedQueueModule {}
