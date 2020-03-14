import { InputType, Field } from "type-graphql";

@InputType()
export class JoinGameInput {
  @Field() gameId: string;
  @Field() userId: string;
}
