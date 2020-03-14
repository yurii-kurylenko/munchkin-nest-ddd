import { Curse, Munchkin } from "src/shared";

export class RemoveBodyCurse implements Curse {
  apply(munchkin: Munchkin) {
    munchkin.body = undefined;
  }
}
