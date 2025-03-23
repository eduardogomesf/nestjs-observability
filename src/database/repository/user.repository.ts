import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../schema/user.schema";
import { Model } from "mongoose";
import { User as UserEntity } from "../../entity/user.entity";

@Injectable()
export class UserRepository {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async insertOne(user: UserEntity) {
    await this.userModel.insertOne(user)
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({
     email
    })
  }

}