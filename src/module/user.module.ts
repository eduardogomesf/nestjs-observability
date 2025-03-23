import { Module } from "@nestjs/common";
import { UserController } from "../controller/user.controller";
import { CreateUserService } from "../service/create-user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserService]
})
export class UserModule {}