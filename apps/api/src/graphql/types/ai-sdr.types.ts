import { Field, ObjectType, InputType } from '@nestjs/graphql';

@InputType()
export class ProcessRequestInput {
  @Field()
  data: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  timestamp?: string;
}

@InputType()
export class AnalyzeRequestInput {
  @Field()
  data: string;

  @Field()
  analysisType: string;

  @Field({ nullable: true })
  parameters?: string;
}

@ObjectType()
export class ProcessResponse {
  @Field()
  status: string;

  @Field()
  message: string;

  @Field()
  data: string;

  @Field()
  timestamp: string;
}

@ObjectType()
export class AnalysisInsights {
  @Field()
  processed: boolean;

  @Field(() => [String])
  insights: string[];
}

@ObjectType()
export class AnalyzeResponse {
  @Field()
  status: string;

  @Field()
  message: string;

  @Field()
  analysis: AnalysisInsights;

  @Field()
  data: string;

  @Field()
  timestamp: string;
}
