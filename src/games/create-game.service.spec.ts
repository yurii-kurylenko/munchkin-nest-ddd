import { CreateGameService } from './create-game.service';
import { CreateGameInput } from './input/create-game.input';
import { Game, GameStatus } from './game.entity';
import { Deck } from 'src/cards';

describe('CreateGameService', () => {
  let service: CreateGameService;

  const gameMock: any = {};
  let userRepoMock: any;
  const gamesRepoMock: any = { insert: jest.fn().mockResolvedValue(gameMock) };
  const cardsServiceMock: any = {
    generateDoors: jest.fn().mockReturnValue(['M1']),
    generateTreasures: jest.fn().mockReturnValue(['T1']),
  };
  const userId = 'b16cf10b-b46b-483d-b9d3-4fa62b4d1e33';
  const gameCreateData: CreateGameInput = {
    title: 'Test game',
    players: [userId],
  };
  const createGameSpy = jest.spyOn(Game, 'createGame').mockReturnValue(gameMock);

  describe('should create a game successfully', () => {

    beforeEach(() => {
      userRepoMock = { exists: jest.fn().mockResolvedValue(true) };
      service = new CreateGameService(gamesRepoMock, userRepoMock, cardsServiceMock);
    });

    it('#exec', async () => {
      const game = await service.exec(gameCreateData);

      expect(createGameSpy).toBeCalledWith({
        playerIds: gameCreateData.players,
        title: gameCreateData.title,
        status: GameStatus.Pending,
        doorsDeck: expect.any(Deck),
        treasuresDeck: expect.any(Deck),
        discardDoorsDeck: expect.any(Deck),
        discardTreasuresDeck: expect.any(Deck),
      });

      expect(userRepoMock.exists).toHaveBeenCalledWith(userId);
      expect(cardsServiceMock.generateDoors).toHaveBeenCalled();
      expect(cardsServiceMock.generateTreasures).toHaveBeenCalled();
      expect(gamesRepoMock.insert).toHaveBeenCalledWith(gameMock);
      expect(game).toEqual(gameMock);
    });
  });

  describe('should fail game creation', () => {

    beforeEach(() => {
      userRepoMock = { exists: jest.fn().mockResolvedValue(false) };
      service = new CreateGameService(gamesRepoMock, userRepoMock, cardsServiceMock);
    });

    it('due to user does not exist', async () => {
      await service.exec(gameCreateData).catch(error => {
        expect(error.message).toEqual('Some users do not exists');
      });
    });

  });
});
