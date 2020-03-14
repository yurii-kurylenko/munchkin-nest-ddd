import { Curse, Munchkin } from "src/shared";

export class RemoveLevelCurse implements Curse {
  apply(munchkin: Munchkin) {
    munchkin.reduceLevelBy(1);
  }
}
