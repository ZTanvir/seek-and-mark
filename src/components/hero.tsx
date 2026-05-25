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
        className="object-cover z-0 "
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <Container>
        <div className="relative z-20 h-full">
          <header>
            <Navbar />
          </header>
          <div className="mt-14 md:mt-0 h-full flex flex-col justify-center items-center">
            <h1 className="text-white text-center text-4xl font-bold capitalize">
              Welcome to Seek And Mark
            </h1>
            <Link
              className="bg-purple-500 font-semibold hover:bg-purple-400 px-8 mt-2 py-3 text-xl text-white rounded"
              href="/games"
            >
              Games
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
