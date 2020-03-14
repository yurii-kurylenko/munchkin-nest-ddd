import { Curse, Munchkin } from "src/shared";

export class RemoveHatCurse implements Curse {
  apply(munchkin: Munchkin) {
    munchkin.hat = undefined;
  }
}
