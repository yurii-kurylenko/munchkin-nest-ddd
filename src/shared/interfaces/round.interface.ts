import { RoundState } from "./round-state.interface";
import { Combat } from "./combat.interface";
import { Munchkin } from "./munchkin.interface";

export interface Round extends RoundState {

  combat?: Combat;
  player: Munchkin;

  isPreparationState(): boolean;
  isBadStuffState(): boolean;
  isCleanupState(): boolean;
  isCursedState(): boolean;
  isEscapeFailedState(): boolean;
  isEscapeState(): boolean;
  isEscapeSuccessState(): boolean;
  isLootingState(): boolean;
  isRewardingState(): boolean;
  isSecondCardState(): boolean;
  isCombatState(): boolean;
}
