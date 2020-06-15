import { TurnState } from "./turn-state.enum";
import { Entity } from "@shared";

export interface TurnProps {
  munchkinId: string;
  state: TurnState;
}

export class Turn extends Entity<TurnProps> {
  public static create(props: TurnProps, id?: string): Turn {
    return new Turn(props, id);
  }

  protected constructor(props: TurnProps, id?: string) {
    super(props, id);
  }
}