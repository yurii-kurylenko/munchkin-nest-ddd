import { BaseMonster } from "./base-monster";
import { MonsterCode, Klass, Munchkin } from "src/shared";

export class HorrorMonster extends BaseMonster {
  readonly minCombatLevel: number = 1;
  readonly power: number = 14;
  readonly winLevels: number = 1;
  readonly baseWinTreasurescount: number = 4;
  readonly monsterCode: MonsterCode = MonsterCode.Horror;

  getPowerFor(munchkin: Munchkin): number {
    if (munchkin.isWarrior()) {
      return this.power + 4;
    } else {
      return this.power;
    }
  }

  badStuff(munchkin: Munchkin) {
    if (munchkin.isWizard()) {
      munchkin.removeKlass(Klass.Wizard);
    } else {
      munchkin.die();
    }
  }
}
