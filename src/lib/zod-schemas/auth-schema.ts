import * as z from "zod";

export const SignInSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});
