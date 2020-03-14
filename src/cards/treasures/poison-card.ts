import { TreasureCard } from "./treasure-card.interface";
import { Round, Targetable, PoisonCardCode, Poison } from "src/shared";
import { BaseCard } from "../base-card";

export class PoisonCard extends BaseCard implements TreasureCard {
  code: PoisonCardCode;
  readonly poisonKlass: new () => Poison;

  constructor(code: PoisonCardCode, poisonKlass: new () => Poison) {
    super(code);
    this.poisonKlass = poisonKlass;
  }

  canBeUsed(round: Round, target: Targetable): boolean {
    return round.isCombatState();
  }

  use(round: Round, target: Targetable): void {
    if (!this.canBeUsed(round, target)) { throw Error("Can not use this card"); }
  }

  getPosion() {
    return new this.poisonKlass();
  }
}
