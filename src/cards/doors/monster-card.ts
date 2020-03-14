import { DoorCard } from "./door-card.interface";
import { MonsterCardCode, Round, Targetable, Monster } from "src/shared";
import { BaseCard } from "../base-card";

export class MonsterCard extends BaseCard implements DoorCard {
  readonly code: MonsterCardCode;
  readonly monsterKlass: new (cardCode: MonsterCardCode) => Monster;

  constructor(code: MonsterCardCode, monsterKlass: new (cardCode: MonsterCardCode) => Monster) {
    super(code);
    this.monsterKlass = monsterKlass;
  }

  canBeUsed(round: Round, target: Targetable): boolean {
    return false;
    // return round.isCombatState() && !!round.combat?.hasUndead()
  }

  use(round: Round, target: Targetable): void {
    if (!this.canBeUsed(round, target)) { throw Error("Can not use this card"); }
  }

  getMonster(): Monster {
    return new this.monsterKlass(this.code);
  }

}
