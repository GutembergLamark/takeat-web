/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import ListProducts from "@/@core/domain/usecases/listProducts/listProducts.usecase";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import emptyProducts from "@/assets/svg/empty-foods.svg";
import { FormCreateProduct } from "@/components/forms";
import { Button, Card } from "@/components/general";
import { DefaultModal } from "@/components/modals";
import { DefaultModalRef } from "@/components/modals/DefaultModal/DefaultModal.types";
import { useEffect, useRef, useState } from "react";
import { ActionForOpenModalProps } from "./CreateAndListProducts.types";
import { IProduct } from "@/@core/domain/entities/product/Product.types";
import Product from "@/@core/domain/entities/product/Product";

export default function ActionForOpenModal({ id }: ActionForOpenModalProps) {
  const modalRef = useRef<DefaultModalRef>(null);
  const [products, setProducts] = useState<Array<IProduct>>([]);

  const listProducts = new ListProducts(restaurantGateway);

  useEffect(() => {
    (async () => {
      const data = await listProducts.execute(id);

      const formatedProducts = data.products.map((product: IProduct) => {
        const newProduct = new Product(
          product.id,
          product.name,
          product.description,
          product.value,
          product.canceled_at,
          product.createdAt,
          product.updatedAt,
          product.restaurant_id
        );

        return newProduct;
      });

      setProducts(formatedProducts.map((product: Product) => product.toJSON()));
    })();
  }, [modalRef?.current?.closeModal]);

  return (
    <>
      <DefaultModal ref={modalRef}>
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
        {products?.length ?? 0 > 0 ? (
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
          <>
            <picture>
              <img src={emptyProducts} alt="Sem Produtos" />
            </picture>
            <p>Seu restaurante ainda não tem produtos cadastrados</p>
          </>
        )}
      </div>
    </>
  );
}
