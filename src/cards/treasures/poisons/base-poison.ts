import { Poison } from "src/shared";

// TODO: Unsed;
export abstract class BasePoison implements Poison {
  abstract price: number;
  abstract power: number;
  abstract isFire: true;
}
