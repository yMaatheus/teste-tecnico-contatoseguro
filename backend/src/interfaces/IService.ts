export interface IService<T> {
  create(body: T): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | null>;
  updateById(id: number, update: Partial<T>): Promise<void>;
  deleteById(id: number): Promise<void>;
}