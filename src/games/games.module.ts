import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GamesRepository } from "./games.repository";
import { GameDocumentSchema } from "./game.document";
import { GamesResolver } from "./games.resolver";
import { CardsModule } from "src/cards/cards.module";
import { CreateGameService } from "./create-game.service";
import { UsersModule } from "src/users/users.module";
import { JoinGameService } from "./join-game.service";
import { StartGameService } from './start-game.service';
// import { RoundsModule } from './rounds/rounds.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "GameDocument", schema: GameDocumentSchema }]),
    CardsModule,
    UsersModule,
    // RoundsModule,
  ],
  controllers: [],
  providers: [GamesRepository, CreateGameService, JoinGameService, StartGameService, GamesResolver],
})
export class GamesModule { }
