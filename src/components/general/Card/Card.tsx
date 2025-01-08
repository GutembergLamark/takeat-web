import { DefaultModal } from "@/components/modals";
import style from "./Card.module.scss";
import { CardProps } from "./Card.types";
import { useRef } from "react";
import { DefaultModalRef } from "@/components/modals/DefaultModal/DefaultModal.types";

export function Card({ id, name, description, value }: CardProps) {
  const modalRef = useRef<DefaultModalRef>(null);
  const displayValue =
    value &&
    new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <>
      <article
        className={style.card}
        onClick={() => modalRef?.current?.showModal()}
        id={id}
      >
        <picture>
          <img src="https://placehold.co/250x200" alt={name} />
        </picture>
        <div className={style.card__content}>
          {name && <h3>{name}</h3>}
          {description && <p>{description}</p>}
        </div>
        {value && <span>{displayValue}</span>}
      </article>
      <DefaultModal ref={modalRef}>
        <h2>{name}</h2>
      </DefaultModal>
    </>
  );
}
