import { Document, Schema, Types } from "mongoose";
import { v4 } from "uuid";

export interface UserDocument extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const UserDocumentSchema = new Schema({
  _id: { type: String, default: v4 },
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  gameIds: [{ type: Types.ObjectId, ref: "games" }],
}, { timestamps: { createdAt: true, updatedAt: false }, collection: "users" });
