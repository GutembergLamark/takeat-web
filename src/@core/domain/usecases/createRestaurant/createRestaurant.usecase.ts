/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DataCreateRestaurant,
  RestaurantGateway,
} from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { ICreateRestaurant } from "./createRestaurant.usecase.types";
import { DataValidator } from "@/@core/infra/adapters/validator";
import { createRestaurantSchema } from "@/utils/schemas";

export default class CreateRestaurant implements ICreateRestaurant {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(data: DataCreateRestaurant): Promise<any> {
    if (data.has_service_tax === "on") {
      data.has_service_tax = true;
    } else {
      data.has_service_tax = false;
    }

    const validator = new DataValidator();

    const validate = validator.validate<DataCreateRestaurant>(
      data,
      createRestaurantSchema
    );

    if (validate) {
      delete data?.confirm;
      return await this.restaurantGateway.createRestaurant(data);
    }

    if (!validate) {
      return {
        errors: validator.errors<DataCreateRestaurant>(
          data,
          createRestaurantSchema
        ),
      };
    }
  }
}
