import { Targetable } from "./targetable.interface";
import { Munchkin } from "./munchkin.interface";
import { Race, Klass, EquipmentCode } from "../enums";

export interface Equipment {
  isBelowTheBelt: boolean;
  price: number;
  power: number;
  oneHanded: boolean;
  twoHanded: boolean;
  isBig: boolean;
  hat: boolean;
  body: boolean;
  shoes: boolean;
  femailOnly: boolean;
  klassesAllowed: Klass[];
  racesAllowed: Race[];
  equipmentCode: EquipmentCode;

  getPowerFor(munchkin: Munchkin): number;
  isActiveFor(munchkin: Munchkin): boolean;
  isEqual(equipment: Equipment): boolean;
}
