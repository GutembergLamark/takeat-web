import { Form } from "react-router-dom";
import style from "./FormLogin.module.scss";
import { Input } from "@/components/formsInputs";
import useFormLoginModel from "./FormLogin.model";
import { handleChange } from "@/utils/functions";
import { Credentials } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";

export function FormLogin() {
  const { setValues, onSubmit } = useFormLoginModel();

  return (
    <Form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit();
      }}
    >
      <Input
        attributes={{
          type: "email",
          placeholder: "E-mail do Restaurante",
          id: "email",
          onChange: (e) => handleChange<Credentials>(e, setValues),
        }}
        label="Email:"
      />
      <Input
        attributes={{
          type: "password",
          placeholder: "Senha",
          id: "password",
          onChange: (e) => handleChange<Credentials>(e, setValues),
        }}
        label="Senha:"
      />
      <button type="submit">Cadastrar</button>
    </Form>
  );
}
