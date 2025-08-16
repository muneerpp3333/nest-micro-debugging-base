import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SharedConfigService {
  constructor(private configService: ConfigService) {}

  // Generic get method - enhanced with nullish coalescing for strings
  get<T = string>(key: string): T extends string ? string : T | undefined {
    const value = this.configService.get<T>(key);
    // Use nullish coalescing for string types to provide safe defaults
    if (typeof value === 'string' || value === undefined || value === null) {
      return (value ?? '') as any;
    }
    return value as any;
  }

  getOrThrow<T>(key: string): T {
    return this.configService.getOrThrow<T>(key);
  }

  getNumber(key: string): number {
    const value = this.configService.get<string>(key);
    return value ? parseInt(value, 10) : 0;
  }

  getBoolean(key: string): boolean {
    return this.configService.get<string>(key) === 'true';
  }
}
