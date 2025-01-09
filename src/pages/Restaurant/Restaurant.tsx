import { CartContext } from "@/context/cart/cart.context";
import { ListRestaurant } from "@/sections/modules/Reastaurant";
import { MotionMain } from "@/utils/libs/motion";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export function Restaurant() {
  const { restaurantId } = useParams();
  const uri = `/restaurant/${restaurantId}`;

  const { setRestaurantForCart } = useContext(CartContext);

  useEffect(() => {
    setRestaurantForCart(restaurantId || "");
  }, [restaurantId]);

  return (
    <MotionMain>
      <ListRestaurant
        fields={{ id: restaurantId, title: "Produtos" }}
        uri={uri}
        order={1}
      />
    </MotionMain>
  );
}
