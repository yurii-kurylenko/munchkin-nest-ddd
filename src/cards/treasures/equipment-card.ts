import { TreasureCard } from "./treasure-card.interface";
import { EquipmentCardCode, Equipment, Round, Targetable, TargetType, Munchkin, Monster } from "src/shared";
// import { Player } from "src/games/players/player.entity";
import { BaseCard } from "../base-card";

export class EquipmentCard extends BaseCard implements TreasureCard {
  code: EquipmentCardCode;
  readonly equipmentKlass: new () => Equipment;

  constructor(code: EquipmentCardCode, equipmentKlass: new () => Equipment) {
    super(code);
    this.equipmentKlass = equipmentKlass;
  }

  canBeUsed(round: Round, target: Targetable): boolean {
    if (target.targetType === TargetType.Munchkin) {
      const player = target as any;
      return this.isOwner(player) && round.isPreparationState() && (round.player.id === player.id);
    } else if (target.targetType === TargetType.Monster) {
      const monster = target as Monster;
      return monster.buyoutPrice > 0;
    } else {
      return false;
    }
  }

  use(round: Round, target: Targetable): void {
    if (!this.canBeUsed(round, target)) { throw Error("Can not use this card"); }
  }

  getEquipment() {
    return new this.equipmentKlass();
  }
}
