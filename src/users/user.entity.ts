import { Entity } from "src/shared";
import { ObjectType, Field } from "type-graphql";

export interface UserProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@ObjectType()
export class User extends Entity<UserProps> {
  @Field()
  readonly id: string;

  @Field()
  get email(): string {
    return this.props.email;
  }

  public static createUser(props: UserProps, id?: string) {
    return new User(props, id);
  }

  constructor(props: UserProps, id?: string) {
    super(props, id);
  }
}
