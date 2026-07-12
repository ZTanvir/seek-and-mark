import Container from "@/components/container";
import Navbar from "@/components/layouts/navbar";
import ToastContainer from "@/components/toast-container";
import { ToastContextProvider } from "@/context/ToastContext";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-brand-blue flex min-h-screen w-full flex-col">
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="flex flex-1 flex-col">
        <ToastContextProvider>
          {children}
          <ToastContainer />
        </ToastContextProvider>
      </main>
    </div>
  );
}
