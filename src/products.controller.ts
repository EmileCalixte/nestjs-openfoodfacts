import {
  CacheInterceptor,
  Controller,
  Get,
  HttpException,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@Controller('products')
@UseInterceptors(CacheInterceptor)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('find')
  @ApiQuery({ name: 'name' })
  @ApiQuery({ name: 'page', required: false })
  @ApiResponse({ status: 200, description: 'The list of found products' })
  @ApiResponse({ status: 400, description: 'Missing parameter(s)' })
  async findByName(@Query() query: { name?: string; page?: string }) {
    if (!('name' in query)) {
      throw new HttpException('Bad Request', 400);
    }

    const productName = query.name;

    // We should verify that `page` param is a valid number and not a random string
    // Here I want to keep the code as simple as possible, so I don't do this additional check
    const page = 'page' in query ? parseInt(query.page) : 1;

    // We could also add response headers to indicate the number of pages, total number of items...

    return await this.productsService.findByProductName(productName, page);
  }

  @Get(':code')
  @ApiResponse({
    status: 200,
    description: 'The product corresponding to the code',
  })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async getByCode(@Param('code') code: string) {
    const product = await this.productsService.findByCode(code);

    if (!product) {
      throw new HttpException('Not found', 404);
    }

    return product;
  }
}
