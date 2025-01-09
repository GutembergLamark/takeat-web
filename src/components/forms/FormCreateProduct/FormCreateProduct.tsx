import { Form } from "react-router-dom";
import useFormCreateProductModel from "./FormCreateProduct.model";
import style from "./FormCreateProduct.module.scss";
import { Input } from "@/components/formsInputs";
import { Button } from "@/components/general";
import { handleChange } from "@/utils/functions";
import { DataCreateProduct } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { FormCreateProductProps } from "./FormCreateProduct.types";

export function FormCreateProduct({ closeModal }: FormCreateProductProps) {
  const { setValues, onSubmit, errors } = useFormCreateProductModel({
    closeModal,
  });

  return (
    <Form
      className={style.form}
      onSubmit={async (e) => {
        e.preventDefault();

        await onSubmit();
      }}
    >
      <Input
        attributes={{
          type: "text",
          placeholder: "Nome do produto",
          id: "name",
          onChange: (e) => handleChange<DataCreateProduct>(e, setValues),
        }}
        label="Nome do Produto:"
        error={errors?.name}
      />
      <Input
        attributes={{
          type: "text",
          placeholder: "Descrição do produto",
          id: "description",
          onChange: (e) => handleChange<DataCreateProduct>(e, setValues),
        }}
        label="Descrição do Produto:"
        error={errors?.description}
      />

      <Input
        attributes={{
          type: "text",
          placeholder: "Valor do produto",
          id: "description",
          onAccept: (value) =>
            handleChange<DataCreateProduct>(null, setValues, "value", value),
        }}
        label="Valor do Produto:"
        mask={Number}
        error={errors?.value}
      />
      <Button
        type="button"
        styleType="default"
        label="Cadastrar"
        buttonProps={{ type: "submit" }}
        color="red"
      >
        Cadastrar
      </Button>
    </Form>
  );
}
