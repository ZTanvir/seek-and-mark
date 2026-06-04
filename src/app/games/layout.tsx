import Container from "@/components/container";

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-cyan-800/80 w-full h-screen">{children}</div>;
}
