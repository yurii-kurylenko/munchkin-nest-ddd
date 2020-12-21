import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { GamesModule } from "./games/games.module";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from './users/users.module';
import { join } from "path";

@Module({
  imports: [
    MongooseModule.forRoot(process.env['DB_URI']),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql.gql')
    }),
    GamesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
