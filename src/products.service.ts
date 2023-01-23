import {Model} from 'mongoose';
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "./schemas/product.schema";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async findByCode(code: string): Promise<Product | null> {
    return await this.productModel.findOne({code});
  }

  async findByProductName(productName: string, page = 1, pageSize = 20): Promise<Product[]> {
    const skip = (page - 1) * pageSize;

    return await this.productModel.find({product_name: new RegExp(productName)}).skip(skip).limit(pageSize);
  }
}
