"use client";

import { useActionState } from "react";
import { signIn } from "@/actions/auth";
import Link from "next/link";

export const initialSignInState = {
  success: false,
  message: "",
};

export default function SignInForm() {
  const [state, dispatchAction, isPending] = useActionState(
    signIn,
    initialSignInState,
  );
  const handleForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  };
  return (
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" />
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
