
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { TurnDocument } from "./turn.document";
import { AbstractMongooseRepository } from "../../shared";
import { Turn, TurnProps } from "./turn.entity";

@Injectable()
export class TurnsRepository extends AbstractMongooseRepository<Turn, TurnDocument> {

  constructor(
    @InjectModel("TurnDocument") private readonly turnDocumentModel: Model<TurnDocument>,
  ) {
    super(turnDocumentModel);
  }

  buildEntityFromDocument(document: TurnDocument): Turn {
    return Turn.create({
      state: document.state,
      munchkinId: document.munchkinId
    }, document.id);
  }

  buildDocumentFromEntity(entity: Turn): TurnDocument {
    const snapshot = entity.getSnapshot();
    return new this.documentModel({
      state: snapshot.state,
      munchkinId: snapshot.munchkinId
    })
  }
}
