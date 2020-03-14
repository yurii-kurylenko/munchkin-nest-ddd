import { Monster } from "./monster.interface";

export interface Combat {
  hasMonster(monster: Monster): boolean;
}
