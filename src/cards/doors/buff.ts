import { Buffable, Monster } from "src/shared";

export class Buff implements Buffable {

  treasuresCountModifier: number;
  powerModifier: number;

  constructor(treasuresCountModifier: number, powerModifier: number) {
    this.treasuresCountModifier = treasuresCountModifier;
    this.powerModifier = powerModifier;
  }

  useOn(monster: Monster) {
    monster.power += this.powerModifier;
    monster.treasuresCount += this.treasuresCountModifier;
  }

}
