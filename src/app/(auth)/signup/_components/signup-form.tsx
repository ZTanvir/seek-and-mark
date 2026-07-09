"use client";

import { SignUpSchema } from "@/lib/zod-schemas/auth-schema";
import Link from "next/link";
import * as z from "zod";
import { useState } from "react";

type SignUpErrors = {
  username?: string[];
  email?: string[];
  password?: string[];
};

export default function SignUpForm() {
  const isPending = false;
  const [errors, setErrors] = useState<SignUpErrors | null>(null);

  const handleSubmitForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rawData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const result = SignUpSchema.safeParse(rawData);
    if (!result.success) {
      const formatErrors = z.flattenError(result.error);
      setErrors(formatErrors.fieldErrors);
    } else {
      console.log(result.data);
    }
    console.log(rawData);
  };
  return (
    <form
      className="mx-auto mt-[200px] max-w-lg space-y-2 rounded-xl bg-neutral-100 px-6 py-4"
      onSubmit={handleSubmitForm}
    >
      <legend className="text-center text-xl font-bold md:text-3xl">
        Sign up
      </legend>
      <div className="space-y-1">
        <label htmlFor="username">Username</label>
        <input
          className="w-full rounded-lg border border-gray-500 px-3 py-1"
          type="text"
          name="username"
          id="username"
        />
        {errors?.username && (
          <p className="text-red-400">{errors.username[0]}</p>
        )}
      </div>
      <div className="space-y-1">
        <label htmlFor="email">Email</label>
        <input
          className="w-full rounded-lg border border-gray-500 px-3 py-1"
          type="text"
          name="email"
          id="email"
        />
        {errors?.email && <p className="text-red-400">{errors.email[0]}</p>}
      </div>
      <button
        className="flex cursor-pointer items-center gap-x-2 rounded-lg bg-blue-800 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-700"
        disabled={isPending}
        type="submit"
      >
        {isPending && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></span>
        )}
        Sign up
      </button>
      <p>
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-500 underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
