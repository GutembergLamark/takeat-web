import { ListCart } from "@/sections/modules/Cart";
import { MotionMain } from "@/utils/libs/motion";

export function Cart() {
  const uri = "/cart";

  return (
    <MotionMain key={uri} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ListCart fields={{ title: "Carrinho" }} uri={uri} order={1} />
    </MotionMain>
  );
}
