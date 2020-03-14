import { Card } from "./card.interface";

export interface RoundState {
  round: any;

  kickOpenDoor(): void;
  confirmCurse(card: Card): void;
  cancelCurse(card?: Card): void;
  playNewCard(card: Card): void;
  lootTheRoom(): void;
  lookingForATrouble(card: Card): void;
  looseCombat(): void;
  winCombat(): void;
  skipCombat(card?: Card): void;
  throwDice(): void;
  confirmBadStuff(): void;
  finishRound(): void;
}
