import { TargetType, Race, Klass, Equipment, Gender, Monster, Card, Entity, CardOwner, CardCode } from "src/shared";

export interface MunchkinProps {
  userId: string;
  gender: Gender;
  cardsInHands: Card[];
  level?: number;
  speed?: number;
  isDied?: boolean;
  races?: Race[];
  klasses?: Klass[];
  isSuperMunchkin?: boolean;
  isHalfBlooded?: boolean;
  hat?: Equipment;
  rightHand?: Equipment;
  leftHand?: Equipment;
  body?: Equipment;
  shoes?: Equipment;
  allHands?: Equipment;
  extraEquipment?: Equipment[];
  inactiveEquipment?: Equipment[];
}

export class Munchkin extends Entity<MunchkinProps> implements CardOwner {
  readonly targetType: TargetType = TargetType.Munchkin;

  public static createMunchkin(props: MunchkinProps, id?: string) {
    if (!props.userId) { throw Error("Munchin must be assisioated with user"); }

    const munchkinPropsWithDefaults: MunchkinProps = {
      ...props,
      level: props.level || 1,
      speed: props.speed || 2,
      extraEquipment: props.extraEquipment || [],
      inactiveEquipment: props.inactiveEquipment || [],
    };
    return new Munchkin(munchkinPropsWithDefaults, id);
  }

  private constructor(props: MunchkinProps, id?: string) {
    super(props, id);
  }

  get level(): number { return this.props.level; }
  get speed(): number { return this.props.speed; }
  get isSuperMunchkin(): boolean { return !!this.props.isSuperMunchkin; }
  get isHalfBlooded(): boolean { return !!this.props.isHalfBlooded; }
  get klasses(): Klass[] { return this.props.klasses || []; }
  get races(): Race[] { return this.props.races || []; }
  get cardsInHands(): Card[] { return this.props.cardsInHands || []; }
  get isDied(): boolean { return !!this.props.isDied; }

  public pickUpCard(card: Card) {
    this.props.cardsInHands.push(card);
  }

  public playCard(cardCode: CardCode): Card {
    const cardIndex = this.cardsInHands.findIndex((handCard: Card) => handCard.code === cardCode);
    if (cardIndex === -1) { return null; }
    return this.props.cardsInHands.splice(cardIndex, 1)[0];
  }

  isWarrior(): boolean { return this.klasses.includes(Klass.Warrior); }
  isWizard(): boolean { return this.klasses.includes(Klass.Wizard); }
  isThief(): boolean { return this.klasses.includes(Klass.Thief); }
  isCleric(): boolean { return this.klasses.includes(Klass.Cleric); }

  isDwarve(): boolean { return this.races.includes(Race.Dwarve); }
  isHalfling(): boolean { return this.races.includes(Race.Halfling); }
  isElf(): boolean { return this.races.includes(Race.Elf); }
  isHuman(): boolean { return this.races.length === 0; }

  getPowerAgainst(monster: Monster): number {
    return this.level;
  }

  die() {
    this.props = {
      ...this.props,
      allHands: undefined,
      shoes: undefined,
      rightHand: undefined,
      leftHand: undefined,
      body: undefined,
      extraEquipment: [],
      isDied: true,
    };
  }

  reduceLevelBy(count: number) {
    if (this.props.level - count <= 0) {
      this.props.level = 1;
    } else {
      this.props.level -= count;
    }
  }

  removeKlass(type: Klass | null = null, all: boolean = false) {
    this.props.isSuperMunchkin = false;
    if (all) { return this.props.klasses = []; }

    if (type) {
      const index = this.klasses.indexOf(type);
      if (index > -1) { this.klasses.splice(index, 1); }
    } else {
      this.props.klasses.pop();
    }
  }

  removeRace(type: Race | null = null, all: boolean = false) {
    this.props.isHalfBlooded = false;
    if (all) { return this.props.races = []; }

    if (type) {
      const index = this.races.indexOf(type);
      if (index > -1) { this.props.races.splice(index, 1); }
    } else {
      this.props.races.pop();
    }
  }

  getSpeedAgainst(monster: Monster) {
    let speed = this.speed + monster.munchkinSpeedModifier;
    if (this.isElf()) { speed += 1; }
    return speed;
  }

}
