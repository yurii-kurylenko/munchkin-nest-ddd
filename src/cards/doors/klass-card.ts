import { DoorCard } from "./door-card.interface";
import { Klass, Round, Targetable, KlassCardCode } from "src/shared";
import { BaseCard } from "../base-card";

export class KlassCard extends BaseCard implements DoorCard {
  readonly code: KlassCardCode;
  public klass: Klass;

  constructor(code: KlassCardCode, klass: Klass) {
    super(code);
    this.klass = klass;
  }

  canBeUsed(round: Round, target: Targetable): boolean {
    throw new Error("Method not implemented.");
  }

  use(round: Round, target: Targetable) {
    throw new Error("Method not implemented.");
  }
}
