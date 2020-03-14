import { Curse, Munchkin } from "src/shared";

export class RemoveRacesCurse implements Curse {
  apply(munchkin: Munchkin) {
    munchkin.removeRace(null, true);
  }
}
