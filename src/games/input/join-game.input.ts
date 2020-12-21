import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class JoinGameInput {
  @Field() gameId: string;
  @Field() userId: string;
}
