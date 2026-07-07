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

    const result = SignInSchema.safeParse(formData);
    if (!result.success) {
      const flattened = z.flattenError(result.error);
      setErrors(flattened.fieldErrors);
    } else {
    }
  };
  return (
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="text" name="email" id="email" />
        {errors?.email && <p>{errors.email[0]}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" />
        {errors?.password && <p>{errors.password[0]}</p>}
      </div>
      <button disabled={isPending} type="submit">
        LOGIN
      </button>
      <p>
        Don&apos;t have an account? <Link href="/register">Sign-up</Link>
      </p>
    </form>
  );
}
