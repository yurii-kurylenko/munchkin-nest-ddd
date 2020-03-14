import { Card } from "./card.interface";
import { CardCode } from "../enums";

export interface CardConvertable  {
  cardCode: CardCode;
  toCard(): Card;
}
