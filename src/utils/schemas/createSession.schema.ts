import { z } from "zod";

export const createSessionSchema = z.object({
  email: z
    .string({ message: "Email é obrigatório" })
    .min(1, "Email é obrigatório")
    .email("Email inválido"),

  password: z
    .string({ message: "Senha é obrigatória" })
    .min(1, "Senha é obrigatória"),
});
