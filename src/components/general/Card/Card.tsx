import { DefaultModal } from "@/components/modals";
import style from "./Card.module.scss";
import { CardProps } from "./Card.types";
import { Button } from "../Button/Button";
import useCardModel from "./Card.model";

export function Card({
  id,
  name,
  description,
  value,
  amountCart,
  noAddCart,
  inCart,
}: CardProps) {
  const {
    amount,
    setAmount,
    displayValue,
    dislpayTotalValue,
    modalRef,
    addProduct,
    removeProduct,
    displayAddCart,
    displayRemoveCart,
    displayQuantity,
  } = useCardModel({
    product: { id, name, value, description },
    noAddCart,
    inCart,
    amountCart,
  });

  return (
    <>
      <article
        className={style.card}
        onClick={() => modalRef?.current?.showModal()}
        id={id}
      >
        <picture>
          <img src="https://placehold.co/190x120" alt={name} />
        </picture>
        <div className={style.card__content}>
          {name && <h3>{name}</h3>}
          {value && <span>{inCart ? dislpayTotalValue : displayValue}</span>}
        </div>
      </article>

      <DefaultModal ref={modalRef}>
        <section className={style["card-modal"]}>
          <picture>
            <img src="https://placehold.co/600x300" alt={name} />
          </picture>
          {displayQuantity && (
            <p>
              <span>Quantidade</span>{" "}
              <span>
                {amount > 0 && (
                  <button onClick={() => setAmount((old: number) => old - 1)}>
                    -
                  </button>
                )}
                <span>{amount}</span>
                <button onClick={() => setAmount((old: number) => old + 1)}>
                  +
                </button>
              </span>
            </p>
          )}
          <h2>{name}</h2>
          <p>{description}</p>

          {displayAddCart && (
            <Button
              type="button"
              styleType="default"
              label="Adicionar ao carrinho"
              buttonProps={{
                type: "button",
                onClick: () => {
                  if (amount > 0) {
                    addProduct({ id, name, value, amount, description });
                    modalRef?.current?.closeModal();
                  }
                },
              }}
              color="red"
            >
              {`Adicionar ${dislpayTotalValue}`}
            </Button>
          )}

          {displayRemoveCart && (
            <Button
              type="button"
              styleType="default"
              label="Remover"
              buttonProps={{
                type: "button",
                onClick: () => {
                  if (amount > 0) {
                    removeProduct({ id, name, value, amount, description });
                    modalRef?.current?.closeModal();
                  }
                },
              }}
              color="red"
            >
              Remover
            </Button>
          )}
        </section>
      </DefaultModal>
    </>
  );
}
