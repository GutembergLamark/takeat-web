import { createContext } from "react";
import { IRestaurantContext } from "./restaurant.types";

export const RestaurantContext = createContext({} as IRestaurantContext);
