"use server";

import { SignInSchema, SignUpSchema } from "@/lib/zod-schemas/auth-schema";
import { SignInState } from "@/types/auth";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { createNewUser, getUserByEmail } from "@/lib/dal/auth-query";
import { saltAndHashPassword } from "@/lib/utils";

export async function signInUser(prevState: SignInState, formData: unknown) {
  let rawData = undefined;

  if (formData instanceof FormData) {
    rawData = {
      email: (formData.get("email") ?? "") as string,
      password: (formData.get("password") ?? "") as string,
    };
  }

  const result = SignInSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      message: "Invalid credentials.",
      inputs: rawData,
    };
  }
  try {
    await signIn("credentials", result.data);
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error);
    }
  }
  return {
    success: true,
    message: "Logged in successfully.",
  };
}

export async function signUpUser(prevState: unknown, formData: unknown) {
  let rawData = undefined;
  if (formData instanceof FormData) {
    rawData = {
      username: (formData.get("username") ?? "") as string,
      email: (formData.get("email") ?? "") as string,
      password: (formData.get("password") ?? "") as string,
    };
  }
  const result = SignUpSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      message: "Invalid from data.",
      inputs: rawData,
    };
  }

  const isUserExist = await getUserByEmail(result.data.email);
  if (isUserExist) {
    return {
      success: false,
      message: "User with similar email already exists.",
      inputs: rawData,
    };
  }
  const pwHashed = saltAndHashPassword(result.data.password);
  const newUser = await createNewUser(
    result.data.username,
    result.data.email,
    pwHashed,
  );
  if (newUser) {
    try {
      await signIn("credentials", {
        email: result.data.email,
        password: result.data.password,
        redirect: false,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  if (newUser)
    return {
      success: true,
      message: "Registration successful.",
    };
}
