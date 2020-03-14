import { Module } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { UserDocumentSchema } from "./user.document";
import { UsersResolver } from "./users.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "UserDocument", schema: UserDocumentSchema }]),
  ],
  providers: [UsersRepository, UsersResolver],
  exports: [UsersRepository],
})
export class UsersModule { }
