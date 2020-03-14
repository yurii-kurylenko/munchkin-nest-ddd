import { BaseMonster } from "./base-monster";
import { MonsterCode, Munchkin } from "src/shared";

export class MucusMonster extends BaseMonster {
  readonly minCombatLevel: number = 1;
  readonly power: number = 1;
  readonly winLevels: number = 1;
  readonly baseWinTreasurescount: number = 1;
  readonly monsterCode: MonsterCode = MonsterCode.Muscus;

  badStuff(munchkin: Munchkin) {
    if (munchkin.shoes) {
      munchkin.shoes = undefined;
    } else {
      munchkin.reduceLevelBy(1);
    }
  }
}
