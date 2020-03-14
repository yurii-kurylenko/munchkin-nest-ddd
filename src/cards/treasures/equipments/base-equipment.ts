import { Equipment, Klass, Race, Munchkin, EquipmentCode } from "src/shared";

export abstract class BaseEquipment implements Equipment {
  abstract oneHanded: boolean;
  abstract twoHanded: boolean;
  abstract hat: boolean;
  abstract body: boolean;
  abstract shoes: boolean;
  abstract price: number;
  abstract power: number;
  abstract equipmentCode: EquipmentCode;

  isBig: boolean = false;
  femailOnly: boolean = false;
  klassesAllowed: Klass[] = [];
  racesAllowed: Race[] = [];
  isBelowTheBelt: boolean = false;

  getPowerFor(munchkin: Munchkin): number {
    return this.power;
  }

  isEqual(equipment: Equipment): boolean {
    return this.equipmentCode === equipment.equipmentCode;
  }

  isActiveFor(munchkin: Munchkin): boolean {
    if (munchkin.hat && this.hat) { return false; }
  }
}
