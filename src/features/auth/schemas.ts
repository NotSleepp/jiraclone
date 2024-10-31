import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email Invalido"),
    password: z.string().min(1, "Campo Requerido")
})