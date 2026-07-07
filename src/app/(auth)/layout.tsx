import Navbar from "@/components/layouts/navbar";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-brand-blue min-h-screen w-full">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
}
