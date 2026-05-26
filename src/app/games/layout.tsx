import Navbar from "@/components/navbar";
import Container from "@/components/container";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-cyan-800/80 w-full h-screen">
      <Container>
        <header>
          <Navbar />
        </header>
        {children}
      </Container>
    </div>
  );
}
