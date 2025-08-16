import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ServicesTestResolver } from './resolvers/services-test.resolver';
import { ApiService } from '../api.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
  ],
  providers: [ServicesTestResolver, ApiService],
  exports: [GraphQLModule],
})
export class ApiGraphQLModule {}
