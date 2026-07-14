import { auth } from "@/auth";
import { ToastContextProvider } from "@/context/ToastContext";
import { SessionProvider } from "next-auth/react";

export default async function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div className="bg-brand-blue min-h-screen w-full">
      <SessionProvider session={session}>
        <ToastContextProvider>{children}</ToastContextProvider>
      </SessionProvider>
    </div>
  );
}
