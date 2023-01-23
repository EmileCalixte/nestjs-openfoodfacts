import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@database:27017/app?authSource=admin', // TODO use dotenv for credentials
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
