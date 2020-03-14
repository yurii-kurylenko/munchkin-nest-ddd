import { Curse, Munchkin } from "src/shared";

export class RemoveShoesCurse implements Curse {
  apply(munchkin: Munchkin) {
    munchkin.shoes = undefined;
  }
}
