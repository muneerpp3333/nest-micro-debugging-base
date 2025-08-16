import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AiSdrResolver } from './resolvers/ai-sdr.resolver';
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
  providers: [AiSdrResolver, ApiService],
  exports: [GraphQLModule],
})
export class ApiGraphQLModule {}
