import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string({ message: "O nome é obrigatório" })
    .min(1, "O nome é obrigatório"),
  description: z
    .string({ message: "A descrição é obrigatória" })
    .min(1, "A descrição é obrigatória"),
  value: z
    .string({ message: "O valor é obrigatório" })
    .min(1, "O valor é obrigatório")
    .refine((value) => !!parseFloat(value), {
      message: "O valor precisa ser um número",
    }),
});
