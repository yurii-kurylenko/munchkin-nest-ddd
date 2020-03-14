import { Document, Schema, Types } from "mongoose";
import { CardCode, Gender, Race, Klass, EquipmentCode } from "src/shared";
import { v4 } from "uuid";

export interface MunchkinDocument extends Document {
  userId: string;
  gender: Gender;
  cardsInHands: CardCode[];
  level: number;
  speed: number;
  isDied: boolean;
  races: Race[];
  klasses: Klass[];
  isSuperMunchkin: boolean;
  isHalfBlooded: boolean;
  hat: EquipmentCode;
  rightHand: EquipmentCode;
  leftHand: EquipmentCode;
  body: EquipmentCode;
  shoes: EquipmentCode;
  allHands: EquipmentCode;
  extraEquipment: EquipmentCode[];
  inactiveEquipment: EquipmentCode[];
}

export const MunchkinDocumentSchema = new Schema({
  _id: { type: String, default: v4 },
  userId: { type: Types.ObjectId, ref: "users", required: true },
  gender: String,
  level: Number,
  speed: Number,
  isDied: Boolean,
  races: [String],
  klases: [String],
  isSuperMunchkin: Boolean,
  isHalfBlooded: Boolean,
  hat: String,
  rightHand: String,
  leftHand: String,
  body: String,
  shoes: String,
  allHands: String,
  extraEquipment: [String],
  inactiveEquipment: [String],
  cardsInHand: [String],
}, { timestamps: { createdAt: true, updatedAt: true }, collection: "munchkins" });
