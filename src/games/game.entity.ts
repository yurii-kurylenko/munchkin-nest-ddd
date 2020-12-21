import { Entity } from "src/shared";
import { Deck, DoorCard, TreasureCard } from "src/cards";
import { ObjectType, Field } from "@nestjs/graphql";

export enum GameStatus {
  Pending,
  Started,
  Finished,
}

export interface GameProps {
  playerIds: string[];
  status: GameStatus;
  title: string;
  doorsDeck?: Deck<DoorCard>;
  discardDoorsDeck?: Deck<DoorCard>;
  treasuresDeck?: Deck<TreasureCard>;
  discardTreasuresDeck?: Deck<TreasureCard>;
}

@ObjectType()
export class Game extends Entity<GameProps> {
  @Field()
  readonly id: string;

  @Field()
  get title(): string {
    return this.props.title;
  }

  @Field()
  get status(): GameStatus {
    return this.props.status;
  }

  get treasuresDeck(): Deck<TreasureCard> {
    return this.props.treasuresDeck;
  }

  get doorsDeck(): Deck<DoorCard> {
    return this.props.doorsDeck;
  }

  public static createGame(props: GameProps, id?: string): Game {
    return new Game(props, id);
  }

  public join(playerId: string) {
    if (this.status !== GameStatus.Pending) {
      throw new Error("Can join only if game in pending state");
    }
    this.props.playerIds.push(playerId);
  }

  private constructor(props: GameProps, id?: string) {
    super(props, id);
  }

  takeTreasureCards(count: 1): TreasureCard[] {
    // TODO: add swapping
    return this.treasuresDeck.take(count);
  }

  takeDoorCards(count: 1): DoorCard[] {
    // TODO: add swapping
    return this.doorsDeck.take(count);
  }
}
