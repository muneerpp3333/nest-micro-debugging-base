export interface ProcessRequest {
  data: string;
  type: string;
  timestamp?: string;
}

export interface AnalyzeRequest {
  data: string;
  analysisType: string;
  parameters?: Record<string, any>;
}
