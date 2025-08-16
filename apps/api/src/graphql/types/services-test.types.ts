import { Field, ObjectType, InputType } from '@nestjs/graphql';

@InputType()
export class ServiceTestInput {
  @Field()
  data: string;

  @Field({ nullable: true })
  metadata?: string;
}

@ObjectType()
export class ServiceTestResponse {
  @Field()
  service: string;

  @Field()
  status: string;

  @Field()
  message: string;

  @Field()
  data: string;

  @Field()
  timestamp: string;
}