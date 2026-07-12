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
  password: z.string().trim().min(1, "Password required"),
});

export const SignUpSchema = z.object({
  username: z.string().trim().min(1, "Username required"),
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
    .min(8, "Password must be at least 8 characters long."),
});
