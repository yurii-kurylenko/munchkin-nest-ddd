export interface Repository<E> {
  findAll(): Promise<E[]>;
  find(id: string): Promise<E>;
  update(entity: E): Promise<E>;
  insert(entity: E): Promise<E>;
  delete(id: string): Promise<E>;
  exists(id: string): Promise<boolean>;
}
