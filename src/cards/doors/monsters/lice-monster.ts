import { BaseMonster } from "./base-monster";
import { MonsterCode, Munchkin } from "src/shared";

export class LiceMonster extends BaseMonster {
  readonly minCombatLevel: number = 1;
  readonly power: number = 1;
  readonly winLevels: number = 1;
  readonly baseWinTreasurescount: number = 1;
  readonly buyoutPrice: number = 0;
  readonly allowToEscape: boolean = false;
  readonly monsterCode: MonsterCode = MonsterCode.Lice;

  badStuff(munchkin: Munchkin) {
    munchkin.body = undefined;
    munchkin.shoes = undefined;
    munchkin.extraEquipment = munchkin.extraEquipment.filter(eqp => eqp.isBelowTheBelt === false);
  }
}
