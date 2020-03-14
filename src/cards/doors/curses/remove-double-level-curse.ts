import { Curse, Munchkin } from "src/shared";

export class RemoveDoubleLevelCurse implements Curse {
  apply(munchkin: Munchkin) {
    munchkin.reduceLevelBy(2);
  }
}
