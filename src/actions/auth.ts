"use server";

import { SignInSchema } from "@/lib/zod-schemas/auth-schema";
import { SignInState } from "@/types/auth";

export async function signIn(prevState: SignInState, formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = SignInSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      message: "",
      inputs: rawData,
    };
  }
  return { success: true, message: "Logged in successfully.", inputs: rawData };
}
