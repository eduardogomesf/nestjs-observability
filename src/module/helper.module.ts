import { Global, Module } from "@nestjs/common";
import { IdHelper } from "../helper/id.helper";

@Global()
@Module({
  imports: [],
  providers: [IdHelper],
  exports: [IdHelper],
})
export class HelperModule {}