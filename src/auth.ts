import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { saltAndHashPassword } from "./lib/utils";
import { SignInSchema } from "./lib/zod-schemas/auth-schema";
import { getUserByEmailAndPassword } from "./lib/dal/auth-query";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        let user = null;
        const { email, password } = credentials;
        const result = SignInSchema.safeParse({ email, password });
        if (!result.success) {
          return null;
        }
        const pwHash = saltAndHashPassword(result.data.password);
        user = await getUserByEmailAndPassword(result.data.email, pwHash);
        if (!user) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],
});
