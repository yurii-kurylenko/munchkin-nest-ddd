import { Card, DoorCardCode } from "src/shared";

export interface DoorCard extends Card {
  code: DoorCardCode;
}
