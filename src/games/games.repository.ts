
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { GameDocument } from "./game.document";
import { AbstractMongooseRepository } from "../shared";
import { Game } from "./game.entity";
import { CardsService, Deck, DoorCard, TreasureCard } from "../cards";

@Injectable()
export class GamesRepository extends AbstractMongooseRepository<Game, GameDocument> {

  constructor(
    @InjectModel("GameDocument") private readonly gameDocumentModel: Model<GameDocument>,
    private readonly cardsService: CardsService,
  ) {
    super(gameDocumentModel);
  }

  buildEntityFromDocument(document: GameDocument): Game {
    const { doorCards, treasureCards, discardDoorCards, discardTreasureCards } = document.toObject();
    const doorsDeck = new Deck<DoorCard>(doorCards.map(code => this.cardsService.getCardByCode(code) as DoorCard));
    const treasuresDeck = new Deck<TreasureCard>(treasureCards.map(code => this.cardsService.getCardByCode(code) as TreasureCard));
    const discardDoorsDeck = new Deck<DoorCard>(discardDoorCards.map(code => this.cardsService.getCardByCode(code) as DoorCard));
    const discardTreasuresDeck = new Deck<TreasureCard>(discardTreasureCards.map(code => this.cardsService.getCardByCode(code) as TreasureCard));

    return Game.createGame({
      title: document.title,
      playerIds: document.playerIds,
      status: document.status,
      doorsDeck,
      treasuresDeck,
      discardDoorsDeck,
      discardTreasuresDeck,
    }, document.id);
  }

  buildDocumentFromEntity(entity: Game): GameDocument {
    const snapshot = entity.getSnapshot();
    return {
      _id: snapshot.id,
      title: snapshot.title,
      status: snapshot.status,
      playerIds: snapshot.playerIds,
      doorCards: snapshot.doorsDeck?.cards.map(card => card.code),
      discardDoorCards: snapshot.discardDoorsDeck?.cards.map(card => card.code),
      treasureCards: snapshot.treasuresDeck?.cards.map(card => card.code),
      discardTreasureCards: snapshot.discardTreasuresDeck?.cards.map(card => card.code),
    } as GameDocument;
  }
}
