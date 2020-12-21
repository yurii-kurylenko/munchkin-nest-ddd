import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { Game } from "./game.entity";
import { GamesRepository } from "./games.repository";
import { CreateGameInput } from "./input/create-game.input";
import { CreateGameService } from "./create-game.service";
import { JoinGameInput } from "./input/join-game.input";
import { JoinGameService } from "./join-game.service";

@Resolver(of => Game)
export class GamesResolver {
  constructor(
    private readonly gamesRepository: GamesRepository,
    private readonly createGameService: CreateGameService,
    private readonly joinGameService: JoinGameService,
  ) { }

  @Query(returns => Game, { name: "game" })
  async game(@Args({ name: "id", type: () => String }) id: string) {
    return this.gamesRepository.find(id);
  }

  @Query(returns => [Game!])
  async games() {
    return this.gamesRepository.findAll();
  }

  @Mutation(returns => Game!)
  createGame(@Args('createGameData') createGameData: CreateGameInput): Promise<Game> {
    return this.createGameService.exec(createGameData);
  }

  @Mutation(returns => Game!)
  joinGame(@Args('JoinGameData') joinGameData: JoinGameInput): Promise<Game> {
    return this.joinGameService.exec(joinGameData);
  }

}
