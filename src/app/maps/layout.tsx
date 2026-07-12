import { ToastContextProvider } from "@/context/ToastContext";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-brand-blue min-h-screen w-full">
      <ToastContextProvider>{children}</ToastContextProvider>
    </div>
  );
}
