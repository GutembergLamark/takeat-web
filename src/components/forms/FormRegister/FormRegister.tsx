import { Form } from "react-router-dom";
import style from "./FormRegister.module.scss";
import { Input } from "@/components/formsInputs";
import { handleChange } from "@/utils/functions";
import useFormRegisterModel from "./FormRegister.model";
import { Button } from "@/components/general";

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
          onChange: (e) => handleChange(e, setValues),
        }}
        label="Nome:"
        error={errors?.username}
      />
      <Input
        attributes={{
          type: "text",
          placeholder: "Digite o telefone",
          id: "phone",
          onAccept: (value) => handleChange(null, setValues, "phone", value),
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
          onChange: (e) => handleChange(e, setValues),
        }}
        label="Email:"
        error={errors?.email}
      />
      <Input
        attributes={{
          type: "password",
          placeholder: "Digite a senha",
          id: "password",
          onChange: (e) => handleChange(e, setValues),
        }}
        label="Senha:"
        error={errors?.password}
      />
      <Input
        attributes={{
          type: "password",
          placeholder: "Confirme a senha",
          id: "confirm",
          onChange: (e) => handleChange(e, setValues),
        }}
        label="Confirmação de Senha:"
        error={errors?.confirm}
      />
      <Input
        attributes={{
          type: "text",
          placeholder: "Digite o endereço",
          id: "address",
          onChange: (e) => handleChange(e, setValues),
        }}
        label="Endereço:"
        error={errors?.address}
      />
      <Input
        attributes={{
          type: "checkbox",
          id: "has_service_tax",
          onChange: (e) => handleChange(e, setValues),
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
    </Form>
  );
}
