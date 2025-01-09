import { Button, Card } from "@/components/general";
import { CartContext } from "@/context/cart/cart.context";
import { useContext, useRef } from "react";
import emptyProducts from "@/assets/svg/empty-foods.svg";
import { DefaultModalRef } from "@/components/modals/DefaultModal/DefaultModal.types";
import { DefaultModal } from "@/components/modals";
import { FormBuyCart } from "@/components/forms";

export default function ListOfProducts() {
  const modalRef = useRef<DefaultModalRef>(null);

  const { cartProducts } = useContext(CartContext);

  const totalPrice = cartProducts?.reduce(
    (prev, cur) => prev + cur?.amount * cur.value,
    0
  );

  return (
    <>
      <div className="l-cart__products">
        {cartProducts?.length ?? 0 > 0 ? (
          <>
            {cartProducts?.map((product) => (
              <Card
                key={`product-item-cart-${product.id}`}
                id={product?.id}
                name={product?.name}
                description={product?.description}
                value={product?.value}
                amountCart={product?.amount}
                inCart
              />
            ))}

            <p>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </span>
            </p>

            <Button
              type="button"
              styleType="default"
              buttonProps={{
                type: "button",
                onClick: () => modalRef?.current?.showModal(),
              }}
              color="red"
            >
              Finalizar Carrinho
            </Button>
          </>
        ) : (
          <div className="l-cart__empty">
            <picture>
              <img src={emptyProducts} alt="Sem Produtos" />
            </picture>
            <h2>Carrinho vazio</h2>
            <p>Parece que você ainda não pediu nenhuma comida</p>
          </div>
        )}
      </div>

      <DefaultModal ref={modalRef}>
        <section className="l-cart__details">
          <h2>Pagamento</h2>

          <article>
            <h3>Detalhes da Transação:</h3>

            {cartProducts?.map((product) => {
              return (
                <div
                  key={`details-transaction-${product?.id}-${product?.name}`}
                >
                  <p>
                    <span>Nome do produto</span>
                    <span>{product?.name}</span>
                  </p>
                  <p>
                    <span>Quantidade</span>
                    <span>{product?.amount}</span>
                  </p>
                  <p>
                    <span>Preço do produto</span>
                    <span>
                      {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product?.value)}
                    </span>
                  </p>
                  <p>
                    <span>Preço total do produto</span>
                    <span>
                      {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product?.amount * product?.value)}
                    </span>
                  </p>
                </div>
              );
            })}

            <FormBuyCart
              amount={cartProducts[0]?.amount}
              product={cartProducts[0]?.id}
            />
          </article>
        </section>
      </DefaultModal>
    </>
  );
}
