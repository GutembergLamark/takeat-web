/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import ListProducts from "@/@core/domain/usecases/listProducts/listProducts.usecase";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import emptyProducts from "@/assets/svg/empty-foods.svg";
import { FormCreateProduct } from "@/components/forms";
import { Button, Card } from "@/components/general";
import { DefaultModal } from "@/components/modals";
import { DefaultModalRef } from "@/components/modals/DefaultModal/DefaultModal.types";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ActionForOpenModalProps } from "./CreateAndListProducts.types";
import { IProduct } from "@/@core/domain/entities/product/Product.types";
import Product from "@/@core/domain/entities/product/Product";
import { RestaurantContext } from "@/context/restaurant/restaurant.context";
import { MotionDiv } from "@/utils/libs/motion";

export default function ActionForOpenModal({ id }: ActionForOpenModalProps) {
  const modalRef = useRef<DefaultModalRef>(null);

  const { logout } = useContext(RestaurantContext);

  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const listProducts = new ListProducts(restaurantGateway);

  const formatAndSetProducts = useCallback(async () => {
    const data = await listProducts.execute(id);

    if (data.message === "Restaurant not found") {
      logout();
    }

    const formatedProducts = data.products.map((product: IProduct) => {
      return new Product(
        product.id,
        product.name,
        product.description,
        product.value,
        product.canceled_at,
        product.createdAt,
        product.updatedAt,
        product.restaurant_id,
      );
    });

    setProducts(formatedProducts.map((product: Product) => product.toJSON()));
  }, [openModal]);

  useEffect(() => {
    if (!openModal) {
      formatAndSetProducts();
    }
  }, [openModal]);

  return (
    <MotionDiv
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { delay: 0.25 } }}
      exit={{ x: "-100%", opacity: 0, position: "absolute" }}
    >
      <DefaultModal ref={modalRef} setOpenModal={setOpenModal}>
        <FormCreateProduct closeModal={modalRef?.current?.closeModal!} />
      </DefaultModal>

      <Button
        type="button"
        styleType="default"
        buttonProps={{
          type: "button",
          onClick: () => modalRef?.current?.showModal(),
        }}
        color="red"
      >
        Cadastrar novo produto
      </Button>

      <div className="cl-products__products">
        {(products?.length ?? 0 > 0) ? (
          products?.map((product) => {
            return (
              <Card
                key={`product-item-${product.id}`}
                id={product?.id}
                name={product?.name}
                description={product?.description}
                value={product?.value}
                noAddCart
              />
            );
          })
        ) : (
          <div className="cl-products__empty">
            <picture>
              <img src={emptyProducts} alt="Sem Produtos" />
            </picture>
            <p>Seu restaurante ainda não tem produtos cadastrados</p>
          </div>
        )}
      </div>
    </MotionDiv>
  );
}
