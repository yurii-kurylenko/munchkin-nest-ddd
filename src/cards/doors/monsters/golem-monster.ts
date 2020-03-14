import { BaseMonster } from "./base-monster";
import { MonsterCode, Munchkin } from "src/shared";

export class GolemMonster extends BaseMonster {
  readonly minCombatLevel: number = 1;
  readonly power: number = 14;
  readonly winLevels: number = 1;
  readonly baseWinTreasurescount: number = 4;
  readonly monsterCode: MonsterCode = MonsterCode.Golem;

  badStuff(munchkin: Munchkin) {
    munchkin.die();
  }

  isAllowedToSkip(munchkin: Munchkin): boolean {
    if (munchkin.isHalfling()) {
      return false;
    } else {
      return true;
    }
  }
}
