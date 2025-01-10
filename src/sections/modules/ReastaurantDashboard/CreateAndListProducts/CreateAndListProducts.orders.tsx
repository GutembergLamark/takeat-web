import Order from "@/@core/domain/entities/order/Order";
import { IOrder } from "@/@core/domain/entities/order/Order.types";
import { OrderCard } from "@/components/general";
import { RestaurantContext } from "@/context/restaurant/restaurant.context";
import { MotionDiv } from "@/utils/libs/motion";
import { useCallback, useContext, useEffect, useState } from "react";

export default function ListOfOrders() {
  const { getOrders } = useContext(RestaurantContext);
  const [orders, setOrders] = useState<Array<IOrder>>([]);

  const formatAndSetOrders = useCallback(async () => {
    const data = await getOrders();

    const formatedProducts = data.orders.map((order: IOrder) => {
      return new Order(
        order?.id,
        order?.amount,
        order?.total_price,
        order?.total_service_price,
        order?.canceled_at,
        order?.createdAt,
        order?.updatedAt,
        order?.buyer,
        order?.product,
      );
    });

    setOrders(formatedProducts.map((product: Order) => product.toJSON()));
  }, []);

  useEffect(() => {
    formatAndSetOrders();
  }, []);

  return (
    <MotionDiv
      className="cl-products__orders"
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { delay: 0.25 } }}
      exit={{ x: "-100%", opacity: 0, position: "absolute" }}
    >
      {(orders?.length ?? 0 > 0) ? (
        orders?.map((order, index) => {
          return (
            <OrderCard
              key={`order-item-${order.id}`}
              order={index + 1}
              amount={order?.amount}
              total_service_price={order?.total_service_price}
              product={order?.product}
              buyer={order?.buyer}
            />
          );
        })
      ) : (
        <div className="cl-products__empty">
          <p>Seu restaurante ainda não tem ordens de serviço</p>
        </div>
      )}
    </MotionDiv>
  );
}
