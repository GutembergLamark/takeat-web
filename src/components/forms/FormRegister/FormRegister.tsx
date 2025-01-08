import { Form, Link } from "react-router-dom";
import style from "./FormRegister.module.scss";
import { Input } from "@/components/formsInputs";
import { handleChange } from "@/utils/functions";
import useFormRegisterModel from "./FormRegister.model";
import { Button } from "@/components/general";
import { DataCreateRestaurant } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";

export function FormRegister() {
  const { setValues, onSubmit, errors } = useFormRegisterModel();

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
          placeholder: "Digite o nome do restaurante",
          id: "username",
          onChange: (e) => handleChange<DataCreateRestaurant>(e, setValues),
        }}
        label="Nome:"
        error={errors?.username}
      />
      <Input
        attributes={{
          type: "text",
          placeholder: "Digite o telefone",
          id: "phone",
          onAccept: (value) =>
            handleChange<DataCreateRestaurant>(null, setValues, "phone", value),
        }}
        label="Telefone:"
        mask={"+55 (00) 00000-0000"}
        error={errors?.phone}
      />
      <Input
        attributes={{
          type: "email",
          placeholder: "Digite o email",
          id: "email",
          onChange: (e) => handleChange<DataCreateRestaurant>(e, setValues),
        }}
        label="Email:"
        error={errors?.email}
      />
      <Input
        attributes={{
          type: "password",
          placeholder: "Digite a senha",
          id: "password",
          onChange: (e) => handleChange<DataCreateRestaurant>(e, setValues),
        }}
        label="Senha:"
        error={errors?.password}
      />
      <Input
        attributes={{
          type: "password",
          placeholder: "Confirme a senha",
          id: "confirm",
          onChange: (e) => handleChange<DataCreateRestaurant>(e, setValues),
        }}
        label="Confirmação de Senha:"
        error={errors?.confirm}
      />
      <Input
        attributes={{
          type: "text",
          placeholder: "Digite o endereço",
          id: "address",
          onChange: (e) => handleChange<DataCreateRestaurant>(e, setValues),
        }}
        label="Endereço:"
        error={errors?.address}
      />
      <Input
        attributes={{
          type: "checkbox",
          id: "has_service_tax",
          onChange: (e) => handleChange<DataCreateRestaurant>(e, setValues),
        }}
        label="Taxa de serviço:"
      />
      <Button
        type="button"
        styleType="default"
        buttonProps={{ type: "submit" }}
        color="red"
      >
        Cadastrar
      </Button>

      <p>
        Eu já tenho uma conta <Link to="/login">Entrar</Link>
      </p>
    </Form>
  );
}
