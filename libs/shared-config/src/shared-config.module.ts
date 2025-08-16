import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedConfigService } from './shared-config.service';
import { configuration } from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  providers: [SharedConfigService],
  exports: [SharedConfigService],
})
export class SharedConfigModule {}
