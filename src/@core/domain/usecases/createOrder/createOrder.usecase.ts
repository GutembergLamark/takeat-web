/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataValidator } from "@/@core/infra/adapters/validator";
import {
  DataCreateOrder,
  RestaurantGateway,
} from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { createOrderSchema } from "@/utils/schemas";
import { ICreateOrder } from "./createOrder.usecase.types";

export default class CreateOrder implements ICreateOrder {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(data: DataCreateOrder): Promise<any> {
    const validator = new DataValidator();

    const validate = validator.validate<DataCreateOrder>(
      data,
      createOrderSchema,
    );

    if (validate) {
      data.amount = parseFloat(data?.amount?.toString());
      return await this.restaurantGateway.createOrder(data);
    }

    if (!validate) {
      return {
        errors: validator.errors<DataCreateOrder>(data, createOrderSchema),
      };
    }
  }
}
