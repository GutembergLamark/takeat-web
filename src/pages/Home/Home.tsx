import { ListRestaurants } from "@/sections/modules/Home";
import { MotionMain } from "@/utils/libs/motion";

export function Home() {
  const uri = "/";
  return (
    <MotionMain>
      <ListRestaurants fields={{ title: "Restaurantes" }} uri={uri} order={1} />
    </MotionMain>
  );
}
