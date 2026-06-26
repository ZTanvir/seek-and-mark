import { ToastContextProvider } from "@/context/ToastContext";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full bg-cyan-800/80">
      <ToastContextProvider>{children}</ToastContextProvider>
    </div>
  );
}
