"use client";
export default function SignUpForm() {
  return (
    <form
      className="mx-auto mt-[200px] max-w-lg space-y-2 rounded-xl bg-neutral-100 px-6 py-4"
      action=""
    >
      <legend className="text-center text-3xl font-bold">Sign up</legend>
      <div className="space-y-1">
        <label htmlFor="username">Username</label>
        <input
          className="w-full rounded-lg border border-gray-500 px-3 py-1"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email">Email</label>
        <input
          className="w-full rounded-lg border border-gray-500 px-3 py-1"
          type="text"
          name="email"
          id="email"
        />
      </div>
      <div></div>
    </form>
  );
}
