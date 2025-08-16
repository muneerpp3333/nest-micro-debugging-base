import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('API Gateway');
  const app = await NestFactory.create(ApiModule);
  
  const port = process.env.PORT ?? 5001;
  await app.listen(port);
  
  logger.log(`🚀 API Gateway is running on: http://localhost:${port}`);
  logger.log(`📊 GraphQL Playground: http://localhost:${port}/graphql`);
}

void bootstrap();
