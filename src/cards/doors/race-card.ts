import { DoorCard } from "./door-card.interface";
import { BaseCard } from "../base-card";
import { Race, Targetable, Munchkin, RaceCardCode, TargetType, Round } from "src/shared";

export class RaceCard extends BaseCard implements DoorCard {
  readonly code: RaceCardCode;
  public race: Race;

  constructor(code: RaceCardCode, race: Race) {
    super(code);
    this.race = race;
  }

  canBeUsed(round: Round, target: Targetable): boolean {
    if (target.targetType !== TargetType.Munchkin) { return false; }
    const player = target as Munchkin;
    return round.player.id === player.id;
  }

  use(round: Round, target: Targetable) {
    if (this.canBeUsed(round, target)) { throw new Error("Can not use this card"); }
    const player = target as Munchkin;
    player.races.push(this.race);
  }

}
