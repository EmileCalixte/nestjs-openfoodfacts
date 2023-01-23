import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':code')
  async getByCode(@Param('code') code: string) {
    const product = await this.productsService.findByCode(code);

    if (!product) {
      throw new HttpException('Not found', 404);
    }

    return product;
  }
}
