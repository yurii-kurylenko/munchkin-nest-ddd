import { Munchkin } from "./munchkin.interface";

export interface Curse {
  apply(munchkin: Munchkin): void;
}
