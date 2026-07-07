import SignInForm from "@/components/signin-form";
export default function SigninPage() {
  return (
    <div>
      <section className="mx-auto max-w-lg space-y-1 rounded-xl bg-neutral-100 px-6 py-4">
        <h1 className="text-center text-xl md:text-3xl">Welcome back</h1>
        <p className="text-center">Please enter your details</p>
        <SignInForm />
      </section>
    </div>
  );
}
