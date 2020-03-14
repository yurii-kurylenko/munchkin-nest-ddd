import { CardCode } from "../enums/card-code.enum";
import { Round } from "./round.interface";
import { Targetable } from "./targetable.interface";
import { CardOwner } from "./card-owner.interface";

export interface Card {
  readonly code: CardCode;
  owner: CardOwner;
  canBeUsed(round: Round, target: Targetable): boolean;
  use(round: Round, target: Targetable): void;
  changeOwnership(newOwner: CardOwner): void;
}
