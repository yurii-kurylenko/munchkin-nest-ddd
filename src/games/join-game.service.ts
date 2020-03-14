import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { GamesRepository } from "./games.repository";
import { Game } from "./game.entity";
import { UsersRepository } from "src/users/users.repository";
import { JoinGameInput } from "./input/join-game.input";

@Injectable()
export class JoinGameService {
  constructor(
    private readonly gamesRepository: GamesRepository,
    private readonly usersRepository: UsersRepository,
  ) { }

  async exec(params: JoinGameInput): Promise<Game> {
    const game = await this.gamesRepository.find(params.gameId);

    const userExists = await this.usersRepository.exists(params.userId);

    if (userExists) {
      game.join(params.userId);
    } else {
      throw new HttpException(`User with id ${params.userId} not found`, HttpStatus.NOT_FOUND);
    }

    return this.gamesRepository.update(game);
  }
}
