import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { getMap } from "@/lib/dal/db-query";

export default async function Game() {
  const maps = await getMap();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="h-full w-full">
        {maps &&
          maps.map((item) => (
            <section
              key={item.id}
              className="w-[350px] p-3 bg-gray-600 flex flex-col gap-3 rounded-lg"
            >
              <figure key={item.id}>
                <Image
                  src={item.thumbnailUrl}
                  alt="robot city games preview"
                  className="object-cover rounded-lg w-full h-[200px] hover:cursor-pointer hover:scale-102 transition-all duration-200 "
                  width={450}
                  height={300}
                  priority
                />
                <figcaption className="text-center mt-3 capitalize">
                  {item.name}
                </figcaption>
              </figure>
              <Link
                href={`/games/${item.name}`}
                className="px-2 py-3 self-center inline-block bg-cyan-400 rounded-lg hover:cursor-pointer"
              >
                Start game
              </Link>
            </section>
          ))}
      </main>
    </>
  );
}
