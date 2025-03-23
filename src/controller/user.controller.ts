import { BadRequestException, Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
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

    const result = await this.createUserService.execute(
      name,
      email
    );

    if (!result.success) {
      if (result.errorCode === 'EMAIL_TAKEN') {
        throw new BadRequestException('E-mail is already associated with an user')
      }

      throw new InternalServerErrorException()
    }

    return result.data as string
  }
}
