"use client";

import { useActionState, useState } from "react";
import { signIn } from "@/actions/auth";
import Link from "next/link";
import * as z from "zod";
import { SignInSchema } from "@/lib/zod-schemas/auth-schema";

export const initialSignInState = {
  success: false,
  message: "",
};
type FormErrors = {
  email?: string[];
  password?: string[];
};

export default function SignInForm() {
  const [state, dispatchAction, isPending] = useActionState(
    signIn,
    initialSignInState,
  );
  const [errors, setErrors] = useState<null | FormErrors>(null);

  const handleForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rawData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log("rawdata", rawData);
    const result = SignInSchema.safeParse(rawData);
    if (!result.success) {
      const flattened = z.flattenError(result.error);
      console.log(flattened);
      setErrors(flattened.fieldErrors);
    } else {
      setErrors(null);
    }
  };
  return (
    <form className="space-y-2" onSubmit={handleForm}>
      <div className="space-y-1">
        <label htmlFor="email">Email address</label>
        <input
          className="w-full rounded-lg border border-gray-500 px-3 py-1"
          type="text"
          name="email"
          id="email"
        />
        {errors?.email && <p className="text-red-400">{errors.email[0]}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor="password">Password</label>
        <input
          className="w-full rounded-lg border border-gray-500 px-3 py-1"
          type="text"
          name="password"
          id="password"
        />
        {errors?.password && (
          <p className="text-red-400">{errors.password[0]}</p>
        )}
      </div>
      <button
        className="mx-auto cursor-pointer rounded-lg bg-blue-800 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-700"
        disabled={isPending}
        type="submit"
      >
        LOGIN
      </button>
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-500 underline">
          Sign-up
        </Link>
      </p>
    </form>
  );
}
