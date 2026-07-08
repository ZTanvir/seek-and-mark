import Navbar from "@/components/layouts/navbar";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-brand-blue flex min-h-screen w-full flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
