import { Form, Link } from "react-router-dom";
import style from "./FormLogin.module.scss";
import { Input } from "@/components/formsInputs";
import useFormLoginModel from "./FormLogin.model";
import { handleChange } from "@/utils/functions";
import { Credentials } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { Button } from "@/components/general";

export function FormLogin() {
  const { setValues, onSubmit, errors } = useFormLoginModel();

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
          type: "email",
          placeholder: "E-mail do Restaurante",
          id: "email",
          onChange: (e) => handleChange<Credentials>(e, setValues),
        }}
        label="Email:"
        error={errors?.email}
      />
      <Input
        attributes={{
          type: "password",
          placeholder: "Senha",
          id: "password",
          onChange: (e) => handleChange<Credentials>(e, setValues),
        }}
        label="Senha:"
        error={errors?.password}
      />
      <Button
        type="button"
        styleType="default"
        label="Entrar"
        buttonProps={{ type: "submit" }}
        color="red"
      >
        Entrar
      </Button>

      <p>
        Criar uma conta <Link to="/register">Inscrever-se</Link>
      </p>
    </Form>
  );
}
