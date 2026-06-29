import Navbar from "@/components/layouts/navbar";
import { getMaps } from "@/lib/dal/db-query";
import Container from "@/components/container";
import MapList from "./_components/mapList";

export default async function Game() {
  const maps = await getMaps();

  return (
    <>
      <Container>
        <header>
          <Navbar />
        </header>
        <main className="h-full w-full">{maps && <MapList maps={maps} />}</main>
      </Container>
    </>
  );
}
