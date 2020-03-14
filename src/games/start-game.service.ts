import { Injectable } from '@nestjs/common';
import { MunchkinsRepository } from './munchkins/munchkins.repository';
import { GamesRepository } from './games.repository';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class StartGameService {
  constructor(
    private readonly gamesRepository: GamesRepository,
    private readonly usersRepository: UsersRepository,
    // private readonly munchkinRepository: MunchkinsRepository,
  ) { }

  async exec(params: any): Promise<any> {
    return Promise.resolve({});
  }
}
