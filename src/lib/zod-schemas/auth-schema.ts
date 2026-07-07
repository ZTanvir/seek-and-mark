import * as z from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .trim()
    .pipe(
      z.email({
        error: (issue) => {
          if (issue.input === "") {
            return "Email address required";
          }
          return "Invalid email address";
        },
      }),
    ),
  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long."),
});
