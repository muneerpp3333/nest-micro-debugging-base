import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../api.service';
import {
  ProcessRequestInput,
  ProcessResponse,
  AnalyzeRequestInput,
  AnalyzeResponse,
} from '../types/ai-sdr.types';
import { AnalyzeRequest, ProcessRequest } from 'libs/shared/src';

@Resolver()
export class AiSdrResolver {
  constructor(private readonly apiService: ApiService) {}

  @Query(() => String)
  health(): string {
    return 'GraphQL API Gateway is healthy!';
  }

  @Mutation(() => ProcessResponse)
  async processAiSdr(
    @Args('input') input: ProcessRequestInput,
  ): Promise<ProcessResponse> {
    // Convert GraphQL input to service input
    const serviceInput: ProcessRequest = {
      data: input.data,
      type: input.type,
      timestamp: input.timestamp,
    };

    const result = await firstValueFrom(
      this.apiService.processAiSdrRequest(serviceInput),
    );
    return {
      status: result.status,
      message: result.message,
      data: JSON.stringify(result.data),
      timestamp: result.timestamp,
    };
  }

  @Mutation(() => AnalyzeResponse)
  async analyzeData(
    @Args('input') input: AnalyzeRequestInput,
  ): Promise<AnalyzeResponse> {
    // Convert GraphQL input to service input
    const serviceInput: AnalyzeRequest = {
      data: input.data,
      analysisType: input.analysisType,
      parameters: input.parameters
        ? (JSON.parse(input.parameters) as Record<string, unknown>)
        : undefined,
    };

    const result = await firstValueFrom(
      this.apiService.analyzeData(serviceInput),
    );
    return {
      status: result.status,
      message: result.message,
      analysis: {
        processed: result.analysis.processed,
        insights: result.analysis.insights,
      },
      data: JSON.stringify(result.data),
      timestamp: result.timestamp,
    };
  }
}
