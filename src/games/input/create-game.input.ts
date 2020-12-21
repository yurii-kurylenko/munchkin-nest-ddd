import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateGameInput {
  @Field() title: string;
  @Field(type => [String!]) players: string[];
}
