import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { GamesModule } from "./games/games.module";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from './users/users.module';

import * as mongoose from "mongoose";
mongoose.set("debug", true);

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/nest"),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    GamesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
