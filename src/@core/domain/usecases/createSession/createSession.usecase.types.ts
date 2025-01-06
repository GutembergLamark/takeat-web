import { Credentials } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";

export interface ICreateSession {
  execute(credentials: Credentials): Promise<unknown>;
}
