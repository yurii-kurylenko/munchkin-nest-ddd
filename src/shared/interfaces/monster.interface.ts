import { Munchkin } from "./munchkin.interface";
import { Targetable } from "./targetable.interface";
import { MonsterCode } from "../enums/monster-code.enum";

export interface Monster extends Targetable {
  isUndead: boolean;
  minCombatLevel: number;
  power: number;
  levelsCount: number;
  treasuresCount: number;
  buyoutPrice: number;
  allowToEscape: boolean;
  needToEscape: boolean;
  munchkinSpeedModifier: number;
  monsterCode: MonsterCode;

  getPowerFor(munchkin: Munchkin): number;
  getTreasuresCountFor(munchkin: Munchkin): number;
  isAllowedToSkip(munchkin: Munchkin): boolean;
  doesAttack(munchkin: Munchkin): boolean;
  badStuff(munchkin: Munchkin): void;
}
