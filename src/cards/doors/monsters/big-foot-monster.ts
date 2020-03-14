import { BaseMonster } from "./base-monster";
import { Munchkin, MonsterCode } from "src/shared";

export class BigFootMonster extends BaseMonster {
  readonly minCombatLevel: number = 1;
  readonly power: number = 12;
  readonly winLevels: number = 1;
  readonly baseWinTreasurescount: number = 3;
  readonly buyoutPrice: number = 0;
  readonly allowToEscape: boolean = true;
  readonly monsterCode: MonsterCode = MonsterCode.BigFoot;

  getPowerFor(munchkin: Munchkin): number {
    if (munchkin.isDwarve() || munchkin.isHalfling()) {
      return this.power + 3;
    } else {
      return this.power;
    }
  }

  badStuff(munchkin: Munchkin) {
    munchkin.hat = undefined;
  }
}
