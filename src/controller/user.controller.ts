import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '../service/create-user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<string> {
    const { name, email } = body

    if (!email || !name) {
      throw new BadRequestException('email and name are required params')
    }

    return this.createUserService.execute(
      name,
      email
    );
  }
}
