
import { v4 } from "uuid";

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  public readonly id: string;
  protected props: T;

  protected constructor(props: T, id?: string) {
    this.id = id || v4();
    this.props = props;
  }

  // Entities are compared based on their referential
  // equality.
  public equals(object?: Entity<T>): boolean {
    if (object == null || object === undefined) { return false; }
    if (this === object) { return true; }
    if (!isEntity(object)) { return false; }

    return this.id === object.id;
  }

  getSnapshot() {
    return { ...this.props, _id: this.id, id: this.id };
  }
}
