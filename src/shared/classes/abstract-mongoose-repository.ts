import { Document, Model } from "mongoose";
import { Repository } from "../interfaces";

export abstract class AbstractMongooseRepository<E, D extends Document> implements Repository<E> {
  protected documentModel: Model<D>;

  constructor(documentModel: Model<D>) {
    this.documentModel = documentModel;
  }

  abstract buildEntityFromDocument(document: D): E;
  abstract buildDocumentFromEntity(entity: E): D;

  findAll(): Promise<E[]> {
    return this.documentModel
      .find()
      .then((docs: D[]) => docs.map(doc => this.buildEntityFromDocument(doc)));
  }

  insert(entity: E): Promise<E> {
    return new this.documentModel(this.buildDocumentFromEntity(entity))
      .save()
      .then(doc => this.buildEntityFromDocument(doc));
  }

  find(id: string): Promise<E> {
    return this.documentModel
      .findById(id)
      .then(doc => this.buildEntityFromDocument(doc));
  }

  exists(id: string): Promise<boolean> {
    return this.documentModel.exists({ _id: id });
  }

  update(entity: E): Promise<E> {
    const doc = this.buildDocumentFromEntity(entity);
    return doc.save().then(_ => entity);
  }

  delete(id: string): Promise<E> {
    return this.documentModel.findByIdAndDelete(id)
      .then(doc => this.buildEntityFromDocument(doc));
  }
}
