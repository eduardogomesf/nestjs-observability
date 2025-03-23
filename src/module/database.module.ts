import { Module } from "@nestjs/common";
import { UserRepository } from "../database/repository/user.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../database/schema/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema, collection: 'users' }])
  ],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DatabaseModule {}