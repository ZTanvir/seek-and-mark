"use server";

import { SignInSchema, SignUpSchema } from "@/lib/zod-schemas/auth-schema";
import { SignInState } from "@/types/auth";

export async function signIn(prevState: SignInState, formData: FormData) {
  const rawData = {
    email: (formData.get("email") ?? "") as string,
    password: (formData.get("password") ?? "") as string,
  };
  const result = SignInSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      message: "Invalid credentials.",
      inputs: rawData,
    };
  }
  return {
    success: true,
    message: "Logged in successfully.",
  };
}

export async function signUp(prevState: unknown, formData: unknown) {
  let rawData = null;
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
  return {
    success: true,
    message: "Registration successful.",
  };
}
