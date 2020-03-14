
import { MonsterCard } from "./doors";
import { NooseMonster, GrassMonster, GolemMonster, BigFootMonster, HorrorMonster, MucusMonster, LiceMonster } from "./doors/monsters";

import { MonsterCardCode, Card, CardCode, CurseCardCode, BuffCardCode, EquipmentCardCode, PoisonCardCode } from "src/shared";
import { DoorCard } from "./doors/door-card.interface";
import { TreasureCard } from "./treasures/treasure-card.interface";
import { Injectable } from "@nestjs/common";
import {
  RemoveBodyCurse,
  RemoveDoubleLevelCurse,
  RemoveHatCurse,
  RemoveLevelCurse,
  RemoveRacesCurse,
  RemoveShoesCurse,
  RemoveSmallEquipmentCurse,
} from "./doors/curses";
import { CurseCard } from "./doors/curse-card";
import { BuffCard } from "./doors/buff-card";
import { Buff } from "./doors/buff";
import { EquipmentCard } from "./treasures/equipment-card";
import { PocketCulbEquipment } from "./treasures/equipments/pocket-culb-equipment";
import { PoisonCard } from "./treasures/poison-card";
import { OiledLightning } from "./treasures/poisons/oiled-lightning.poison";

@Injectable()
export class CardsService {
  readonly MONSTER_CARDS: { [key: string]: MonsterCard } = {
    [MonsterCardCode.M1]: new MonsterCard(MonsterCardCode.M1, NooseMonster),
    [MonsterCardCode.M2]: new MonsterCard(MonsterCardCode.M2, GrassMonster),
    [MonsterCardCode.M3]: new MonsterCard(MonsterCardCode.M3, GolemMonster),
    [MonsterCardCode.M4]: new MonsterCard(MonsterCardCode.M4, BigFootMonster),
    [MonsterCardCode.M5]: new MonsterCard(MonsterCardCode.M5, HorrorMonster),
    [MonsterCardCode.M6]: new MonsterCard(MonsterCardCode.M6, MucusMonster),
    [MonsterCardCode.M7]: new MonsterCard(MonsterCardCode.M7, LiceMonster),
  };

  readonly CURSE_CARDS: { [key: string]: CurseCard } = {
    [CurseCardCode.C1]: new CurseCard(CurseCardCode.C1, RemoveBodyCurse),
    [CurseCardCode.C2]: new CurseCard(CurseCardCode.C2, RemoveDoubleLevelCurse),
    [CurseCardCode.C3]: new CurseCard(CurseCardCode.C3, RemoveHatCurse),
    [CurseCardCode.C4]: new CurseCard(CurseCardCode.C4, RemoveLevelCurse),
    [CurseCardCode.C5]: new CurseCard(CurseCardCode.C5, RemoveRacesCurse),
    [CurseCardCode.C6]: new CurseCard(CurseCardCode.C6, RemoveShoesCurse),
    [CurseCardCode.C7]: new CurseCard(CurseCardCode.C7, RemoveSmallEquipmentCurse),
  };

  readonly BUFF_CARDS: { [key: string]: BuffCard } = {
    [BuffCardCode.B1]: new BuffCard(BuffCardCode.B1, new Buff(-5, -1)),
    [BuffCardCode.B2]: new BuffCard(BuffCardCode.B2, new Buff(5, 1)),
    [BuffCardCode.B3]: new BuffCard(BuffCardCode.B3, new Buff(5, 1)),
    [BuffCardCode.B4]: new BuffCard(BuffCardCode.B4, new Buff(10, 2)),
    [BuffCardCode.B5]: new BuffCard(BuffCardCode.B5, new Buff(10, 2)),
  };

  readonly EQUIPMENT_CARDS: { [key: string]: EquipmentCard } = {
    [EquipmentCardCode.E1]: new EquipmentCard(EquipmentCardCode.E1, PocketCulbEquipment),
  };

  readonly POISON_CARDS: { [key: string]: PoisonCard } = {
    [PoisonCardCode.P1]: new PoisonCard(PoisonCardCode.P1, OiledLightning),
  };

  generateDoors(): DoorCard[] {
    return this.shuffle([
      ...Object.values(this.MONSTER_CARDS),
      ...Object.values(this.CURSE_CARDS),
      ...Object.values(this.BUFF_CARDS),
    ]);
  }

  generateTreasures(): TreasureCard[] {
    return this.shuffle([
      ...Object.values(this.EQUIPMENT_CARDS),
      ...Object.values(this.POISON_CARDS),
    ]);
  }

  getCardByCode(code: CardCode): Card {
    if (code in MonsterCardCode) {
      return this.getMonsterCardByCode(code as MonsterCardCode);
    } else if (code in CurseCardCode) {
      return this.getCurseCardByCode(code as CurseCardCode);
    } else if (code in BuffCardCode) {
      return this.getBuffCardByCode(code as BuffCardCode);
    } else if (code in EquipmentCardCode) {
      return this.getEquipmentCardByCode(code as EquipmentCardCode);
    } else if (code in PoisonCardCode) {
      return this.getPoisonCardByCode(code as PoisonCardCode);
    } else {
      return null;
    }
  }

  getMonsterCardByCode(code: MonsterCardCode): MonsterCard {
    return this.MONSTER_CARDS[code];
  }

  getCurseCardByCode(code: CurseCardCode): CurseCard {
    return this.CURSE_CARDS[code];
  }

  getBuffCardByCode(code: BuffCardCode): BuffCard {
    return this.BUFF_CARDS[code];
  }

  getEquipmentCardByCode(code: EquipmentCardCode): EquipmentCard {
    return this.EQUIPMENT_CARDS[code];
  }

  getPoisonCardByCode(code: PoisonCardCode): PoisonCard {
    return this.POISON_CARDS[code];
  }

  private shuffle(array: any[]): any[] {
    // tslint:disable-next-line: one-variable-per-declaration
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
