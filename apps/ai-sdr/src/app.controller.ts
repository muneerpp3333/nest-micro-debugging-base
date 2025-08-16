import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

interface ProcessRequest {
  data: string;
  type: string;
  timestamp?: string;
}

interface AnalyzeRequest {
  data: string;
  analysisType: string;
  parameters?: Record<string, unknown>;
}

interface ProcessResponse {
  status: string;
  message: string;
  data: ProcessRequest;
  timestamp: string;
}

interface AnalyzeResponse {
  status: string;
  message: string;
  analysis: {
    processed: boolean;
    insights: string[];
  };
  data: AnalyzeRequest;
  timestamp: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'AI-SDR Service is running!';
  }

  @Post('process')
  processAiSdrRequest(@Body() data: ProcessRequest): ProcessResponse {
    return this.appService.processAiSdrRequest(data);
  }

  @Post('analyze')
  analyzeData(@Body() data: AnalyzeRequest): AnalyzeResponse {
    return this.appService.analyzeData(data);
  }

  @MessagePattern('process_ai_sdr')
  processAiSdrRequestMessage(@Payload() data: ProcessRequest): ProcessResponse {
    return this.appService.processAiSdrRequest(data);
  }

  @MessagePattern('analyze_data')
  analyzeDataMessage(@Payload() data: AnalyzeRequest): AnalyzeResponse {
    return this.appService.analyzeData(data);
  }
}
