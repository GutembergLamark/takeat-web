import { z } from "zod";

export const createRestaurantSchema = z
  .object({
    username: z
      .string({ message: "O Nome é obrigatório" })
      .min(1, "O Nome é obrigatório")
      .refine(
        (value) => {
          const regex = /\s/;
          return regex.test(value.trim());
        },
        {
          message: "Insira um nome e um sobrenome",
        }
      ),
    email: z
      .string({ message: "Email é obrigatório" })
      .min(1, "Email é obrigatório")
      .email("Email inválido"),

    phone: z
      .string({ message: "O telefone é obrigatório" })
      .min(1, "O telefone é obrigatório")
      .refine(
        (value) => {
          const regex = /^\+\d{2}\s\(\d{2}\)\s\d{5}-\d{4}$/;
          return regex.test(value);
        },
        {
          message:
            'Telefone inválido, deve ter o formato "+55 (00) 00000-0000"',
        }
      ),

    address: z
      .string({ message: "O endereço é obrigatório" })
      .min(1, "O endereço é obrigatório"),

    password: z
      .string({ message: "Senha é obrigatória" })
      .refine(
        (value) =>
          value.length >= 8 &&
          /[a-z]/.test(value) &&
          /[A-Z]/.test(value) &&
          /\W|_/.test(value),
        {
          message:
            "A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial",
        }
      ),
    confirm: z
      .string({
        message: "Confirmação de senha é obrigatória",
      })
      .min(1, "Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });
