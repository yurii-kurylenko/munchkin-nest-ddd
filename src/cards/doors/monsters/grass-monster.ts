import { BaseMonster } from "./base-monster";
import { MonsterCode, Munchkin } from "src/shared";

export class GrassMonster extends BaseMonster {
  readonly minCombatLevel: number = 1;
  readonly power: number = 1;
  readonly winLevels: number = 1;
  readonly baseWinTreasurescount: number = 1;
  readonly needToEscape: boolean = false;
  readonly monsterCode: MonsterCode = MonsterCode.Grass;

  badStuff(munchkin: Munchkin) {
    munchkin.body = undefined;
    munchkin.shoes = undefined;
    munchkin.extraEquipment = munchkin.extraEquipment.filter(eqp => eqp.isBelowTheBelt === false);
  }

  getTreasuresCountFor(munchkin: Munchkin): number {
    return this.baseWinTreasurescount + 1;
  }
}
