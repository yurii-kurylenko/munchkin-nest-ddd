import { Monster, TargetType, Munchkin, MonsterCardCode, MonsterCode, CardConvertable } from "src/shared";
import { MonsterCard } from "../monster-card";

export abstract class BaseMonster implements Monster {
  readonly targetType: TargetType = TargetType.Monster;
  minCombatLevel: number = 1;
  power: number = 1;
  levelsCount: number = 1;
  treasuresCount: number = 1;
  readonly buyoutPrice: number = 0;
  readonly allowToEscape: boolean = true;
  readonly needToEscape: boolean = true;
  readonly munchkinSpeedModifier: number = 0;
  readonly isUndead: boolean = false;

  abstract monsterCode: MonsterCode;
  // readonly cardCode: MonsterCardCode;

  // toCard(): MonsterCard {
  //   return new MonsterCard(this.cardCode, this.constructor as new (cardCode: MonsterCardCode) => Monster);
  // }

  getPowerFor(munchkin: Munchkin): number { return this.power; }
  getTreasuresCountFor(munchkin: Munchkin): number { return this.treasuresCount; }
  isAllowedToSkip(munchkin: Munchkin): boolean { return false; }

  doesAttack(munchkin: Munchkin): boolean {
    return munchkin.level >= this.minCombatLevel;
  }

  abstract badStuff(munchkin: Munchkin): void;
}
