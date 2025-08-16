import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../api.service';
import {
  ServiceTestInput,
  ServiceTestResponse,
} from '../types/services-test.types';

@Resolver()
export class ServicesTestResolver {
  constructor(private readonly apiService: ApiService) {}

  @Query(() => String)
  health(): string {
    return 'GraphQL API Gateway is healthy!';
  }

  @Query(() => String)
  apiGatewayInfo(): string {
    return 'API Gateway - Main entry point for all microservices';
  }

  @Mutation(() => ServiceTestResponse)
  async testListingService(
    @Args('input') input: ServiceTestInput,
  ): Promise<ServiceTestResponse> {
    try {
      const result = await firstValueFrom(
        this.apiService.testServiceCommunication('listing', input.data),
      );
      return {
        service: 'listing',
        status: 'success',
        message: 'Listing service responded successfully',
        data: JSON.stringify(result),
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      return {
        service: 'listing',
        status: 'error',
        message: `Error communicating with listing service: ${errorMessage}`,
        data: JSON.stringify({ error: errorMessage }),
        timestamp: new Date().toISOString(),
      };
    }
  }

  @Mutation(() => ServiceTestResponse)
  async testMessagingService(
    @Args('input') input: ServiceTestInput,
  ): Promise<ServiceTestResponse> {
    try {
      const result = await firstValueFrom(
        this.apiService.testServiceCommunication('messaging', input.data),
      );
      return {
        service: 'messaging',
        status: 'success',
        message: 'Messaging service responded successfully',
        data: JSON.stringify(result),
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      return {
        service: 'messaging',
        status: 'error',
        message: `Error communicating with messaging service: ${errorMessage}`,
        data: JSON.stringify({ error: errorMessage }),
        timestamp: new Date().toISOString(),
      };
    }
  }

  @Mutation(() => ServiceTestResponse)
  async testBillingService(
    @Args('input') input: ServiceTestInput,
  ): Promise<ServiceTestResponse> {
    try {
      const result = await firstValueFrom(
        this.apiService.testServiceCommunication('billing', input.data),
      );
      return {
        service: 'billing',
        status: 'success',
        message: 'Billing service responded successfully',
        data: JSON.stringify(result),
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      return {
        service: 'billing',
        status: 'error',
        message: `Error communicating with billing service: ${errorMessage}`,
        data: JSON.stringify({ error: errorMessage }),
        timestamp: new Date().toISOString(),
      };
    }
  }

  @Query(() => [String])
  availableServices(): string[] {
    return ['listing', 'messaging', 'billing'];
  }
}
