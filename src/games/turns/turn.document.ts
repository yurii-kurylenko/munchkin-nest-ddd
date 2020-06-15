import { Document, Schema } from "mongoose";
import { TurnState } from "./turn-state.enum";
import { v4 } from "uuid";

export interface TurnDocument extends Document {
  id: string;
  munchkinId: string;
  state: TurnState;
}

export const TurnDocumentSchema = new Schema({
  _id: { type: String, default: v4 },
  state: Number,
  munchkinId: { type: String, ref: "munchkins", required: true },
}, { timestamps: { createdAt: true, updatedAt: false }, collection: "rounds" });
