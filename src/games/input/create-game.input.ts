import { InputType, Field } from "type-graphql";

@InputType()
export class CreateGameInput {
  @Field() title: string;
  @Field(type => [String]) players: string[];
}
