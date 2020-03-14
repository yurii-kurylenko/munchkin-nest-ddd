import { Document, Schema, Types } from "mongoose";
import { DoorCardCode, TreasureCardCode } from "src/shared";
import { GameStatus } from "./game.entity";
import { v4 } from "uuid";

export interface GameDocument extends Document {
  title: string;
  id: string;
  status: GameStatus;
  playerIds: string[];
  doorCards: DoorCardCode[];
  discardDoorCards: DoorCardCode[];
  treasureCards: TreasureCardCode[];
  discardTreasureCards: TreasureCardCode[];
}

export const GameDocumentSchema = new Schema({
  _id: { type: String, default: v4 },
  title: String,
  status: Number,
  doorCards: {
    type: [String],
    default: [],
  },
  discardDoorCards: {
    type: [String],
    default: [],
  },
  treasureCards: {
    type: [String],
    default: [],
  },
  discardTreasureCards: {
    type: [String],
    default: [],
  },
  playerIds: [{ type: String, ref: "users", required: true }],
}, { timestamps: { createdAt: true, updatedAt: false }, collection: "games" });
