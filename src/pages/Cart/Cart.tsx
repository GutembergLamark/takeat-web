import { ListCart } from "@/sections/modules/Cart";
import { MotionMain } from "@/utils/libs/motion";

export function Cart() {
  const uri = "/cart";

  return (
    <MotionMain>
      <ListCart fields={{ title: "Carrinho" }} uri={uri} order={1} />
    </MotionMain>
  );
}
