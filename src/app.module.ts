import { Module } from '@nestjs/common';
import { UserModule } from './module/user.module';
import { HelperModule } from './module/helper.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getConfigurations } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [getConfigurations]
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('db')?.url,
      }),
      inject: [ConfigService], 
    }),
    HelperModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
