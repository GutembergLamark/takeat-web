/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { RestaurantContext } from "./restaurant.context";
import { IRestaurantProvider } from "./restaurant.types";

export function RestaurantProvider({ children }: IRestaurantProvider) {
  const [restaurant, setRestaurant] = useState<any>(true);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <RestaurantContext.Provider value={{ restaurant, loading }}>
      {children}
    </RestaurantContext.Provider>
  );
}
