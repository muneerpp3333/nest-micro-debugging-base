import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApiService } from './api.service';
import { SharedModule, SERVICE_NAMES } from '../../../libs/shared/src';
import { ServicesTestResolver } from './graphql/resolvers/services-test.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
    SharedModule.registerRmq(
      SERVICE_NAMES.LISTING,
      process.env.RABBITMQ_LISTING_QUEUE || 'listing-queue',
    ),
    SharedModule.registerRmq(
      SERVICE_NAMES.MESSAGING,
      process.env.RABBITMQ_MESSAGING_QUEUE || 'messaging-queue',
    ),
    SharedModule.registerRmq(
      SERVICE_NAMES.BILLING,
      process.env.RABBITMQ_BILLING_QUEUE || 'billing-queue',
    ),
  ],
  providers: [ApiService, ServicesTestResolver],
})
export class ApiModule {}
