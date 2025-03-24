import { config } from 'dotenv'
import { Configurations } from "../type/configurations"

config();

export const getConfigurations = (): Configurations => {
  return {
    db: {
      url: process.env.DB_URL ?? "mongodb://root:root@mongo:27017"
    }
  }
}