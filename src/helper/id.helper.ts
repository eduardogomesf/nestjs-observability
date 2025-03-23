import { v4 as uuid } from 'uuid'

export class IdHelper {

  generateId(): string {
    return uuid()
  }

}