"use server";
import { initialSignInState } from "@/components/signin-form";
export function signIn(
  prevState: typeof initialSignInState,
  formData: FormData,
) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  return { success: false, message: "", inputs: rawData };
}
