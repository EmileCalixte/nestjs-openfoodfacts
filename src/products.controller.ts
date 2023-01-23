import { Controller, Get, HttpException, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('find')
  async findByName(@Query() query: {name?: string}) {
    if (!('name' in query)) {
      throw new HttpException('Bad Request', 400);
    }

    const productName = query.name;

    return this.productsService.findByProductName(productName);
  }

  @Get(':code')
  async getByCode(@Param('code') code: string) {
    const product = await this.productsService.findByCode(code);

    if (!product) {
      throw new HttpException('Not found', 404);
    }

    return product;
  }
}
