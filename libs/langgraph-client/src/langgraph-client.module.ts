import { Module } from '@nestjs/common';
import { LanggraphClientService } from './langgraph-client.service';

@Module({
  providers: [LanggraphClientService],
  exports: [LanggraphClientService],
})
export class LanggraphClientModule {}
