import { Test, TestingModule } from '@nestjs/testing';
import { StartGameService } from './start-game.service';
import { json } from 'express';

// TODO: Finish test
describe('StartGameService', () => {
  let service: StartGameService;
  const munchkin: any = {};
  const user: any = {};
  const gameMock: any = { start: jest.fn().mockReturnValue(true) };
  // const startGameParams = { gameId: 'b16cf10b-b46b-483d-b9d3-4fa62b4d1e34' };

  const munchkinsRepoMock: any = { create: jest.fn().mockResolvedValue(munchkin) };
  const usersRepoMock: any = { find: jest.fn().mockResolvedValue(user) };
  const gamesRepoMock: any = { find: jest.fn().mockResolvedValue(gameMock) };

  beforeEach(async () => {
    service = new StartGameService(gamesRepoMock, usersRepoMock);
  });

  it('should start a game', async () => {
    // const game = await service.exec(startGameParams);
    // TODO: Finish test
    // expect(gamesRepoMock.find).toBeCalledWith(startGameParams.gameId);
  });
});
