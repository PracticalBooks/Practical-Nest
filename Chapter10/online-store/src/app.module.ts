import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
})
export class AppModule {}
