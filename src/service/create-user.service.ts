import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserService {
  async execute(name: string, email: string): Promise<string> {
    return 'Hello World!';
  }
}
