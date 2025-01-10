import { z } from "zod";

export const createOrderSchema = z.object({
  phone: z
    .string({ message: "O telefone obrigatório" })
    .min(1, "O telefone obrigatório"),
});
