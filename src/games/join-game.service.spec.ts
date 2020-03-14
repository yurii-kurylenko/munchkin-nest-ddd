import { JoinGameService } from "./join-game.service";

describe("JoinGameService", () => {
  describe("should join user to the game", () => {
    const gameMock: any = { join: jest.fn() };
    const gamesRepoMock: any = {
      update: jest.fn().mockResolvedValue(gameMock),
      find: jest.fn().mockResolvedValue(gameMock),
    };
    const gameId = 'b16cf10b-b46b-483d-b9d3-4fa62b4d1e34';
    const userId = 'b16cf10b-b46b-483d-b9d3-4fa62b4d1e35';

    let userRepoMock: any;
    let service: JoinGameService;

    beforeEach(() => {
      userRepoMock = { exists: jest.fn().mockResolvedValue(true) };
      service = new JoinGameService(gamesRepoMock, userRepoMock);
    });

    test("#exec", async () => {
      await service.exec({ gameId, userId });
      expect(gamesRepoMock.find).toBeCalledWith(gameId);
      expect(gameMock.join).toBeCalledWith(userId);
      expect(gamesRepoMock.update).toBeCalledWith(gameMock);
    });
  });
});
