import { Injectable } from "@nestjs/common";
import { Equipment, EquipmentCode } from "src/shared";
import { PocketCulbEquipment } from "./treasures/equipments/pocket-culb-equipment";

@Injectable()
export class EquipmentsService {
  readonly EQUIPMENT_CODE_MAP: { [key: string]: new () => Equipment } = {
    [EquipmentCode.PocketCulb]: PocketCulbEquipment,
  };

  getEquipmentByCode(equipmentCode: EquipmentCode): Equipment {
    if ((equipmentCode in EquipmentCode) && !!this.EQUIPMENT_CODE_MAP[equipmentCode]) {
      return new this.EQUIPMENT_CODE_MAP[equipmentCode]();
    } else {
      throw Error("Unknown eqipment code");
    }
  }
}
