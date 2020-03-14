import { Monster } from "./monster.interface";

export interface Buffable {
  treasuresCountModifier: number;
  powerModifier: number;

  useOn(monster: Monster): void;
}
