"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type PasswordInputProps = {
  defaultValue: string | undefined;
  errorMessage: string | undefined;
};

export default function PasswordInput({
  defaultValue,
  errorMessage,
}: PasswordInputProps) {
  const [isDisplayPassword, setIsDisplayPassword] = useState(false);

  return (
    <div className="relative space-y-1">
      <label htmlFor="password">Password</label>
      <input
        className="w-full rounded-lg border border-gray-500 px-3 py-1"
        type={isDisplayPassword ? "text" : "password"}
        name="password"
        id="password"
        defaultValue={defaultValue}
      />
      <span
        onClick={() => setIsDisplayPassword((prev) => !prev)}
        className="absolute right-0 mx-3 my-1 cursor-pointer text-gray-700"
      >
        {isDisplayPassword ? <EyeOff /> : <Eye />}
      </span>
      {errorMessage && <p className="text-red-400">{errorMessage}</p>}
    </div>
  );
}
