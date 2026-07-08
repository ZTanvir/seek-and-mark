"use server";

import { SignInSchema } from "@/lib/zod-schemas/auth-schema";
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
    inputs: result.data,
  };
}
