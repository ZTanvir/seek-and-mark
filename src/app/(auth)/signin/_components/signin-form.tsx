"use client";

import {
  useActionState,
  useState,
  startTransition,
  useEffect,
  useRef,
} from "react";
import { signInUser } from "@/actions/auth";
import Link from "next/link";
import * as z from "zod";
import { SignInSchema } from "@/lib/zod-schemas/auth-schema";
import { SignInState } from "@/types/auth";
import { useToastContext } from "@/hooks/context";
import PasswordInput from "@/components/form/password-input";
import { useRouter } from "next/navigation";

const initialSignInState: SignInState = {
  success: false,
  message: "",
  inputs: {
    email: "",
    password: "",
  },
};
type FormErrors = {
  email?: string[];
  password?: string[];
};

export default function SignInForm() {
  const [state, dispatchAction, isPending] = useActionState(
    signInUser,
    initialSignInState,
  );
  const [errors, setErrors] = useState<null | FormErrors>(null);
  const router = useRouter();
  const formEl = useRef<HTMLFormElement>(null!);
  const { addToast } = useToastContext();

  const handleForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rawData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = SignInSchema.safeParse(rawData);
    if (!result.success) {
      const flattened = z.flattenError(result.error);
      setErrors(flattened.fieldErrors);
    } else {
      setErrors(null);
      startTransition(() => {
        dispatchAction(formData);
      });
    }
  };

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        addToast(state.message, "success");
        formEl.current.reset();
        router.push("/");
      } else {
        addToast(state.message, "error");
      }
    }
  }, [state]);

  return (
    <form ref={formEl} className="space-y-2" onSubmit={handleForm}>
      <div className="space-y-1">
        <label htmlFor="email">Email address</label>
        <input
          className="w-full rounded-lg border border-gray-500 px-3 py-1"
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          defaultValue={state.inputs?.email}
        />
        {errors?.email && <p className="text-red-400">{errors.email[0]}</p>}
      </div>
      <PasswordInput
        defaultValue={state.inputs?.password}
        errorMessage={errors?.password ? errors.password[0] : undefined}
      />

      <button
        className="flex cursor-pointer items-center gap-x-2 rounded-lg bg-blue-800 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-700"
        disabled={isPending}
        type="submit"
      >
        {isPending && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></span>
        )}
        LOGIN
      </button>
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-500 underline">
          Sign-up
        </Link>
      </p>
    </form>
  );
}
