import { TargetType } from "../enums/target-type.enum";
import { Gender } from "../enums/gender.enum";
import { Race } from "../enums/race.enum";
import { Klass } from "../enums/klass.enum";
import { Equipment } from "./equipment.interface";

export interface Munchkin {
  id: string;
  targetType: TargetType;

  gender: Gender;
  level: number;
  speed: number;

  isDied: boolean;
  races: Race[];
  klasses: Klass[];
  extraKlass?: Klass;
  isSuperMunchkin: boolean;
  isHalfBlooded: boolean;

  hat?: Equipment;
  rightHand?: Equipment;
  leftHand?: Equipment;
  body?: Equipment;
  shoes?: Equipment;
  allHands?: Equipment;
  extraEquipment: Equipment[];
  inactiveEquipment: Equipment[];

  isWarrior(): boolean;
  isWizard(): boolean;
  isThief(): boolean;
  isCleric(): boolean;

  isDwarve(): boolean;
  isHalfling(): boolean;
  isElf(): boolean;
  isHuman(): boolean;

  die();
  removeRace(type?: Race, all?: boolean);
  removeKlass(type?: Klass, all?: boolean);

  reduceLevelBy(count: number);
}
