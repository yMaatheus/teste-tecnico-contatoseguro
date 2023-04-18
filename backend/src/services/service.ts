import { Model, ModelStatic } from "sequelize";
import { ErrorTypes } from "../errors/catalog";
import { IService } from "../interfaces/IService";

export class Service<T extends Model<T>> implements IService<T> {

  constructor(public _model: ModelStatic<any>) { }

  async create(body: Partial<T>) {
    const result = await this._model.create(body);
    return result.get();
  }

  async getAll() {
    const result = await this._model.findAll();
    return result;
  }

  async getById(id: number) {
    const result = await this._model.findByPk(id);

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result.get();
  }

  async updateById(id: number, update: Partial<T>) {
    const [result] = await this._model.update(update, {
      where: { id }
    });

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    const entity = await this.getById(id);
    return entity;
  }

  async deleteById(id: number) {
    const result = await this._model.destroy({ where: { id } });
    if (!result) throw Error(ErrorTypes.EntityNotFound);
  }
}
