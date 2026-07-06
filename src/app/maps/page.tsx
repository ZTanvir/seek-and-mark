import Navbar from "@/components/layouts/navbar";
import Container from "@/components/container";
import MapList from "./_components/mapList";
import { Suspense } from "react";
import LoadingMap from "./loading";

export default async function Game() {
  return (
    <>
      <Container>
        <header>
          <Navbar />
        </header>
        <main className="mt-4 h-full w-full">
          <Suspense fallback={<LoadingMap />}>
            <MapList />
          </Suspense>
        </main>
      </Container>
    </>
  );
}
