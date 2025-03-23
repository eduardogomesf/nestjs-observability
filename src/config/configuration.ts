import { Configurations } from "../type/configurations"

export const getConfigurations = (): Configurations => {
  return {
    db: {
      url: process.env.DB_URL ?? "mongodb://root:root@localhost:27017"
    }
  }
}