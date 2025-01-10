import { useState } from "react";
import ActionForOpenModal from "./CreateAndListProducts.products";
import { ActionForOpenModalProps } from "./CreateAndListProducts.types";
import ListOfOrders from "./CreateAndListProducts.orders";
import { AnimatePresence } from "@/utils/libs/motion";

export default function CreateAndListProductsWrapper({
  id,
}: ActionForOpenModalProps) {
  const [menu, setMenu] = useState<"products" | "orders">("products");
  return (
    <>
      <nav role="navigation" className="cl-products__navigation">
        <button
          data-active={menu === "products" ? true : undefined}
          onClick={() => setMenu("products")}
        >
          Produtos
        </button>
        <button
          data-active={menu === "orders" ? true : undefined}
          onClick={() => setMenu("orders")}
        >
          Ordens de Serviço
        </button>
      </nav>

      <AnimatePresence>
        {menu === "products" ? (
          <ActionForOpenModal id={id} key={"products"} />
        ) : (
          <ListOfOrders key={"orders"} />
        )}
      </AnimatePresence>
    </>
  );
}
