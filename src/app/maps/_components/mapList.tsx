import Image from "next/image";
import Link from "next/link";
import type { Map } from "@/generated/prisma/client";
import { getMaps } from "@/lib/dal/db-query";

export default async function MapList() {
  const maps = await getMaps();

  return <>{maps && maps.map((item) => <Map key={item.id} map={item} />)}</>;
}
type MapProps = {
  map: Map;
};

function Map({ map }: MapProps) {
  return (
    <section
      key={map.id}
      className="flex w-[350px] flex-col gap-3 rounded-lg bg-gray-600 p-3"
    >
      <figure key={map.id}>
        <Image
          src={map.thumbnailUrl}
          alt="robot city games preview"
          className="h-[200px] w-full rounded-lg object-cover transition-all duration-200 hover:scale-102 hover:cursor-pointer"
          width={450}
          height={300}
          priority
        />
        <figcaption className="mt-3 text-center capitalize">
          {map.name}
        </figcaption>
      </figure>
      <Link
        href={`/maps/${map.id}`}
        className="inline-block self-center rounded-lg bg-cyan-400 px-2 py-3 hover:cursor-pointer"
      >
        Start game
      </Link>
    </section>
  );
}
