import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import heroImage from "../../public/images/carl-raw-m3hn2Kn5Bns-unsplash.jpg";
import Container from "./container";

export default function HeroSection() {
  return (
    <div className="relative h-[600px] md:h-[600px]">
      <Image
        src={heroImage}
        alt="website home page background"
        fill
        sizes="100vw"
        placeholder="blur"
        priority
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 z-10 bg-black/60"></div>
      <Container>
        <div className="relative z-20 h-full">
          <header>
            <Navbar />
          </header>
          <div className="mt-14 flex h-full flex-col items-center justify-center md:mt-0">
            <h1 className="text-center text-4xl font-bold text-white capitalize">
              Welcome to Seek And Mark
            </h1>
            <Link
              className="mt-2 rounded bg-purple-500 px-8 py-3 text-xl font-semibold text-white hover:bg-purple-400"
              href="/maps"
            >
              Maps
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
