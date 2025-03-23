import { Module } from "@nestjs/common";
import { UserController } from "../controller/user.controller";
import { CreateUserService } from "../service/create-user.service";
import { DatabaseModule } from "./database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserService]
})
export class UserModule {}