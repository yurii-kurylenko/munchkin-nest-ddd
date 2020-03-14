import { BaseEquipment } from "./base-equipment";
import { EquipmentCode } from "src/shared";

export class PocketCulbEquipment extends BaseEquipment {
  oneHanded: boolean = true;
  twoHanded: boolean = false;
  isBig: boolean = false;
  hat: boolean = false;
  body: boolean = false;
  shoes: boolean = false;
  price: number = 600;
  power: number = 5;
  equipmentCode: EquipmentCode.PocketCulb;
}
