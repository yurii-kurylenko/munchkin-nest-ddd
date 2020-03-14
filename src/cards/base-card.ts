import { Card, CardCode, Round, Targetable, CardOwner } from "src/shared";

export abstract class BaseCard implements Card {
  code: CardCode;
  owner: CardOwner;

  constructor(code: CardCode) {
    this.code = code;
  }

  abstract canBeUsed(round: Round, target: Targetable): boolean;
  abstract use(round: Round, target: Targetable): void;

  changeOwnership(newOwner: CardOwner): void {
    this.owner = newOwner;
  }

  isOwner(owner: CardOwner): boolean {
    return this.owner.id === owner.id;
  }
}
