import { CreateAndListProducts } from "@/sections/modules/ReastaurantDashboard";
import { MotionMain } from "@/utils/libs/motion";
import { useParams } from "react-router-dom";

export function RestaurantDashboard() {
  const { restaurantId } = useParams();
  const uri = `/restaurant/${restaurantId}/dashboard`;

  return (
    <MotionMain>
      <CreateAndListProducts
        fields={{ id: restaurantId }}
        uri={uri}
        order={1}
      />
    </MotionMain>
  );
}