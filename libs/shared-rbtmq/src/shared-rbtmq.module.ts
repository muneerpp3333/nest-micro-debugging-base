import { Module } from '@nestjs/common';
import { SharedRbtmqService } from './shared-rbtmq.service';

@Module({
  providers: [SharedRbtmqService],
  exports: [SharedRbtmqService],
})
export class SharedRbtmqModule {}
