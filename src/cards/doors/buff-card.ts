import { DoorCard } from "./door-card.interface";

import { BuffCardCode, Round, Targetable, Monster, Buffable, TargetType } from "src/shared";
import { BaseCard } from "../base-card";

export class BuffCard extends BaseCard implements DoorCard {
  readonly code: BuffCardCode;
  public buff: Buffable;

  constructor(code: BuffCardCode, buff: Buffable) {
    super(code);
    this.buff = buff;
  }

  getBuff(): Buffable {
    return this.buff;
  }

  canBeUsed(round: Round, target: Targetable): boolean {
    if (target.targetType !== TargetType.Monster) { return false; }
    const monster = target as Monster;
    return round.isCombatState() && !!round.combat?.hasMonster(monster);
  }

  use(round: Round, target: Targetable) {
    throw new Error("Not implemented");
  }

}
