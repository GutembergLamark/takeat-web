/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Credentials,
  RestaurantGateway,
} from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { ICreateSession } from "./createSession.usecase.types";
import { DataValidator } from "@/@core/infra/adapters/validator";
import { createSessionSchema } from "@/utils/schemas/createSession.schema";

export default class CreateSession implements ICreateSession {
  constructor(readonly restaurantGateway: RestaurantGateway) {}

  async execute(credentials: Credentials): Promise<any> {
    const validator = new DataValidator();

    const validate = validator.validate<Credentials>(
      credentials,
      createSessionSchema
    );

    if (validate) {
      return await this.restaurantGateway.session(credentials);
    }

    if (!validate) {
      return {
        errors: validator.errors<Credentials>(credentials, createSessionSchema),
      };
    }
  }
}
