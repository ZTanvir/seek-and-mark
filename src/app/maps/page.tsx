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
        <main className="mt-4 h-full w-full">
          {maps && (
            <div>
              <MapList maps={maps} />
            </div>
          )}
        </main>
      </Container>
    </>
  );
}
