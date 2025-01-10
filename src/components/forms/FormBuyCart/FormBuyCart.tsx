import { Form } from "react-router-dom";
import style from "./FormBuyCart.module.scss";
import { Input } from "@/components/formsInputs";
import { Button } from "@/components/general";
import { handleChange } from "@/utils/functions";
import { DataCreateOrder } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import useFormBuyCartModel from "./FormBuyCart.model";
import { FormBuyCartProps } from "./FormBuyCart.types";

export function FormBuyCart({ amount, product }: FormBuyCartProps) {
  const { setValues, onSubmit, errors } = useFormBuyCartModel({
    amount,
    product,
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
          placeholder: "Digite o seu nome",
          id: "name",
          onChange: (e) =>
            handleChange<Pick<DataCreateOrder, "phone" | "name">>(e, setValues),
        }}
        label="Nome:"
        error={errors?.name}
      />
      <Input
        attributes={{
          type: "text",
          placeholder: "Digite o seu telefone",
          id: "phone",
          onAccept: (value) =>
            handleChange<Pick<DataCreateOrder, "phone" | "name">>(
              null,
              setValues,
              "phone",
              value,
            ),
        }}
        label="Telefone:"
        error={errors?.phone}
        mask={"+55 (00) 00000-0000"}
      />
      <Button
        type="button"
        styleType="default"
        label="Entrar"
        buttonProps={{ type: "submit" }}
        color="red"
      >
        Finalizar Compra
      </Button>
    </Form>
  );
}
