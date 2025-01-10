import Restaurant from "@/@core/domain/entities/restaurant/Restaurant";
import { IRestaurant } from "@/@core/domain/entities/restaurant/Restaurant.types";
import ListRestaurants from "@/@core/domain/usecases/listRestaurants/listRestaurants.usecase";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import { RestaurantCard } from "@/components/general";
import { useEffect, useState } from "react";

export default function ListOfRestaurants() {
  const [restaurants, setRestaurants] = useState<Array<IRestaurant>>([]);

  const listRestaurants = new ListRestaurants(restaurantGateway);

  useEffect(() => {
    (async () => {
      const data = await listRestaurants.execute();

      const formatedRestaurants = data.restaurants.map(
        (restaurant: IRestaurant) => {
          const newRestaurant = new Restaurant(
            restaurant?.id,
            restaurant?.username,
            restaurant?.email,
            restaurant?.phone,
            restaurant?.address,
            restaurant?.has_service_tax,
            restaurant?.canceled_at,
            restaurant?.createdAt,
            restaurant?.updatedAt,
          );

          return newRestaurant;
        },
      );

      setRestaurants(
        formatedRestaurants.map((product: Restaurant) => product.toJSON()),
      );
    })();
  }, []);

  return (
    <div className="l-restaurants__list">
      {(restaurants?.length ?? 0 > 0)
        ? restaurants?.map((restaurant) => (
            <RestaurantCard
              key={`restaurant-item-${restaurant?.id}`}
              id={restaurant?.id}
              username={restaurant?.username}
              email={restaurant?.email}
              phone={restaurant?.phone}
              address={restaurant?.address}
              has_service_tax={restaurant?.has_service_tax}
            />
          ))
        : null}
    </div>
  );
}
