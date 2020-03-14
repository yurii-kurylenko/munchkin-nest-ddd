import { DoorCard } from "./door-card.interface";
import { Curse, Round, Munchkin, CurseCardCode, Targetable, TargetType } from "src/shared";
import { BaseCard } from "../base-card";

export class CurseCard extends BaseCard implements DoorCard {
  readonly code: CurseCardCode;
  public curseKlass: new () => Curse;

  constructor(code: CurseCardCode, curseKlass: new () => Curse) {
    super(code);
    this.curseKlass = curseKlass;
  }

  canBeUsed(round: Round, target: Targetable): boolean {
    return target.targetType === TargetType.Munchkin;
  }

  use(round: Round, target: Targetable): void {
    if (this.canBeUsed(round, target)) { throw new Error("Can not use this card"); }
    const munchkin = target as Munchkin;
    this.getCurse().apply(munchkin);
  }

  getCurse(): Curse {
    return new this.curseKlass();
  }

}
