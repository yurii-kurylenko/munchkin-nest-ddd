import { Card } from "src/shared";

export class Deck<T extends Card> {
  cards: T[];

  constructor(cards: T[]) {
    this.cards = cards;
  }

  take(count: number = 1, isOpen: boolean = true): T[] {
    const cards = this.cards.splice(0, count);
    if (cards !== []) {
      return cards;
    } else {
      throw Error("No cards in the deck");
    }
  }

  put(cards: T[]) {
    this.cards = [...this.cards, ...cards];
  }

  getSize(): number {
    return this.cards.length;
  }
}
