import Image from "next/image";
import Link from "next/link";
import roboCityThumbnail from "../../../public/images/games/robot-city-thumbnail.webp";
export default function Game() {
  return (
    <main className="h-full w-full">
      <section className="w-[350px] p-3 bg-gray-600 flex flex-col gap-3 rounded-lg">
        <figure>
          <Image
            src={roboCityThumbnail}
            alt="robot city games preview"
            className="object-cover rounded-lg w-full h-[200px] hover:cursor-pointer hover:scale-102 transition-all duration-200 "
          />
          <figcaption className="text-center mt-3">Robo city</figcaption>
        </figure>
        <Link
          href="/robo-city"
          className="px-2 py-3 self-center inline-block bg-cyan-400 rounded-lg hover:cursor-pointer"
        >
          Start game
        </Link>
      </section>
    </main>
  );
}
