import { ListRestaurant } from "@/sections/modules/Reastaurant";
import { MotionMain } from "@/utils/libs/motion";
import { useParams } from "react-router-dom";

export function Restaurant() {
  const { restaurantId } = useParams();
  const uri = `/restaurant/${restaurantId}`;

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
