import { Module } from '@nestjs/common';
import { UserModule } from './module/user.module';
import { HelperModule } from './module/helper.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL ?? "mongodb://root:root@localhost:27017"),
    HelperModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
