import SignInForm from "@/app/(auth)/signin/_components/signin-form";
export default function SigninPage() {
  return (
    <div className="p-3">
      <section className="mx-auto mt-[100px] max-w-lg space-y-1 rounded-xl bg-neutral-100 px-6 py-4 md:mt-[200px]">
        <h1 className="text-center text-2xl font-bold md:text-3xl">
          Welcome back
        </h1>
        <p className="text-center">Please enter your details</p>
        <SignInForm />
      </section>
    </div>
  );
}
