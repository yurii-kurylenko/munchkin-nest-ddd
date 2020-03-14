import { AbstractMongooseRepository } from "src/shared";
import { UserDocument } from "./user.document";
import { User } from "./user.entity";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UsersRepository extends AbstractMongooseRepository<User, UserDocument> {

  constructor(
    @InjectModel("UserDocument") private readonly userDocumentModel: Model<UserDocument>,
  ) {
    super(userDocumentModel);
  }

  findByIds(ids: string[]): Promise<User[]> {
    return this.documentModel.find({
      _id: { $in: ids.map(id => id) },
    }).then((docs) => docs.map(doc => this.buildEntityFromDocument(doc)));
  }

  buildEntityFromDocument(document: UserDocument): User {
    const { id, ...rest } = document.toObject();
    return User.createUser(rest, id);
  }

  buildDocumentFromEntity(entity: User): UserDocument {
    const snapshot = entity.getSnapshot();
    return { ...snapshot } as UserDocument;
  }
}
