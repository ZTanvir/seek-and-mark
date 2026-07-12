import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { isPasswordMatched } from "./lib/utils";
import { SignInSchema } from "./lib/zod-schemas/auth-schema";
import { getUserByEmail } from "./lib/dal/auth-query";

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
        user = await getUserByEmail(result.data.email);
        if (!user) {
          throw new Error("User with this email not register yet.");
        }
        const isPasswordValid = isPasswordMatched(
          user.hashedPassword,
          result.data.password,
        );
        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.username = user.username as string;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
