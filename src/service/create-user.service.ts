import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repository/user.repository';
import { ServiceResponse } from '../type/service-response.type';
import { IdHelper } from '../helper/id.helper';
import { User } from '../entity/user.entity';

@Injectable()
export class CreateUserService {

  constructor(
    private idHelper: IdHelper,
    private readonly userRepository: UserRepository
  ) {}


  async execute(name: string, email: string): Promise<ServiceResponse<string>> {
    const userByEmail = await this.userRepository.findOneByEmail(email)

    if (userByEmail) {
      return {
        success: false,
        message: 'E-mail already in use',
        errorCode: 'EMAIL_TAKEN'
      }
    }

    const id = this.idHelper.generateId()

    const user = new User(
      id, 
      name,
      email
    )

    await this.userRepository.insertOne(user)

    return {
      success: true,
      data: id,
      message: ''
    }
  }
}
