import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminProductsController } from './admin.products.controller';

@Module({
  controllers: [AdminController, AdminProductsController],
})
export class AdminModule {}
