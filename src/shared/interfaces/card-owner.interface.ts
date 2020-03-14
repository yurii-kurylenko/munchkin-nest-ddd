import { Card } from "./card.interface";
import { CardCode } from "../enums";

export interface CardOwner {
  id: string;
  pickUpCard(card: Card): void;
  playCard(cardCode: CardCode): Card;
}
