import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MunchkinDocumentSchema } from "./munchkin.document";
import { CardsModule } from "src/cards/cards.module";
import { MunchkinsRepository } from "./munchkins.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "MunchkinDocument", schema: MunchkinDocumentSchema }]),
    CardsModule,
  ],
  controllers: [],
  providers: [MunchkinsRepository],
  exports: [MunchkinsRepository],
})
export class MunchkinsModule { }
