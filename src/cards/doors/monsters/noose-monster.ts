import { BaseMonster } from "./base-monster";
import { MonsterCode, Munchkin } from "src/shared";

export class NooseMonster extends BaseMonster {
  readonly minCombatLevel: number = 3;
  readonly power: number = 10;
  readonly winLevels: number = 1;
  readonly baseWinTreasurescount: number = 2;
  readonly buyoutPrice: number = 200;
  readonly allowToEscape: boolean = false;
  readonly monsterCode: MonsterCode = MonsterCode.Noose;

  badStuff(munchkin: Munchkin) {
    munchkin.reduceLevelBy(3);
  }
}
