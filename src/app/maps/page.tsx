import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { getMaps } from "@/lib/dal/db-query";

export default async function Game() {
  const maps = await getMaps();

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
              className="flex w-[350px] flex-col gap-3 rounded-lg bg-gray-600 p-3"
            >
              <figure key={item.id}>
                <Image
                  src={item.thumbnailUrl}
                  alt="robot city games preview"
                  className="h-[200px] w-full rounded-lg object-cover transition-all duration-200 hover:scale-102 hover:cursor-pointer"
                  width={450}
                  height={300}
                  priority
                />
                <figcaption className="mt-3 text-center capitalize">
                  {item.name}
                </figcaption>
              </figure>
              <Link
                href={`/maps/${item.id}`}
                className="inline-block self-center rounded-lg bg-cyan-400 px-2 py-3 hover:cursor-pointer"
              >
                Start game
              </Link>
            </section>
          ))}
      </main>
    </>
  );
}
