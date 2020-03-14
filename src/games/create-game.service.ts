import { Injectable } from "@nestjs/common";
import { GamesRepository } from "./games.repository";
import { CreateGameInput } from "./input/create-game.input";
import { Game, GameStatus } from "./game.entity";
import { UsersRepository } from "src/users/users.repository";
import { CardsService, DoorCard, Deck, TreasureCard } from "src/cards";

@Injectable()
export class CreateGameService {
  constructor(
    private readonly gamesRepository: GamesRepository,
    private readonly usersRepository: UsersRepository,
    private readonly cardsService: CardsService,
  ) { }

  async exec(params: CreateGameInput): Promise<Game> {
    // TODO: Replace with bulk query
    const userExistsQueries = params.players.map(userId => this.usersRepository.exists(userId));
    const userExists = await Promise.all(userExistsQueries);

    if (!userExists.every((val) => val)) { throw new Error("Some users do not exists"); }

    const game = Game.createGame({
      playerIds: params.players,
      status: GameStatus.Pending,
      title: params.title,
      doorsDeck: new Deck<DoorCard>(this.cardsService.generateDoors()),
      treasuresDeck: new Deck<TreasureCard>(this.cardsService.generateTreasures()),
      discardDoorsDeck: new Deck<DoorCard>([]),
      discardTreasuresDeck: new Deck<TreasureCard>([]),
    });
    return await this.gamesRepository.insert(game);
  }
}
