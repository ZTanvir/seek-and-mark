import NextAuth, { type DefaultSession } from "next-auth";
import { type JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession["user"]; // Keeps the default name, email, image fields
  }

  interface User {
    username?: string; // If your database user includes a role
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
  }
}
