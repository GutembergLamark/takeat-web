import emptyProducts from "@/assets/svg/empty-foods.svg";
import { FormCreateProduct } from "@/components/forms";
import { Button } from "@/components/general";
import { DefaultModal } from "@/components/modals";
import { DefaultModalRef } from "@/components/modals/DefaultModal/DefaultModal.types";
import { useRef } from "react";

export default function ActionForOpenModal() {
  const modalRef = useRef<DefaultModalRef>(null);

  return (
    <>
      <picture>
        <img src={emptyProducts} alt="Sem Produtos" />
      </picture>
      <p>Seu restaurante ainda não tem produtos cadastrados</p>
      <Button
        type="button"
        styleType="default"
        buttonProps={{
          type: "button",
          onClick: () => modalRef?.current?.showModal(),
        }}
      >
        Cadastrar novo produto
      </Button>

      <DefaultModal ref={modalRef}>
        <FormCreateProduct />
      </DefaultModal>
    </>
  );
}
