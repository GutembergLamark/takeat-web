/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DataCreateProduct,
  RestaurantGateway,
} from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { DataValidator } from "@/@core/infra/adapters/validator";
import { createProductSchema } from "@/utils/schemas";
import { ICreateProduct } from "./createProduct.usecase.types";

export default class CreateProduct implements ICreateProduct {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(data: DataCreateProduct, authorization: string): Promise<any> {
    const validator = new DataValidator();

    const validate = validator.validate<DataCreateProduct>(
      data,
      createProductSchema
    );

    if (validate) {
      data.value = parseFloat(data?.value?.toString().replace(",", "."));
      return await this.restaurantGateway.createProduct(data, authorization);
    }

    if (!validate) {
      return {
        errors: validator.errors<DataCreateProduct>(data, createProductSchema),
      };
    }
  }
}
