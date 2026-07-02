import { ToastContextProvider } from "@/context/ToastContext";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-[#0B1B3D]">
      <ToastContextProvider>{children}</ToastContextProvider>
    </div>
  );
}
