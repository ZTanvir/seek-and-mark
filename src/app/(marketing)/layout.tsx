import Navbar from "../components/navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {children}
    </div>
  );
}
