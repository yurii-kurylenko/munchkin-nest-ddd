import { User } from "./user.entity";
import { UsersRepository } from "./users.repository";
import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { CreateUserInput } from "./inputs/create-user.input";

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) { }

  @Query(returns => [User!])
  async users() {
    return this.usersRepository.findAll();
  }

  @Mutation(returns => User!)
  async createUser(@Args("createUserData") createUserData: CreateUserInput): Promise<User> {
    const user = User.createUser(createUserData);
    const nwUser = await this.usersRepository.insert(user);
    return user;
  }
}
