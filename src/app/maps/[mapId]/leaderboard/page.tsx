import { Trophy } from "lucide-react";
import Navbar from "@/components/layouts/navbar";
import { Suspense } from "react";
import LeaderboardTable from "@/components/leaderboard-table";
import Loading from "../loading";
import Container from "@/components/container";

type LeaderboardMapPageProps = {
  params: Promise<{ mapId: string }>;
  searchParams: Promise<{ [key: string]: string | undefined | string[] }>;
};

export default async function LeaderboardMapPage({
  params,
  searchParams,
}: LeaderboardMapPageProps) {
  const { mapId } = await params;
  const queryParams = await searchParams;
  const page = Number(queryParams.page) || 1;
  const limit = Number(queryParams.limit) || 10;
  return (
    <div className="h-full w-full">
      <Container>
        <>
          <header>
            <Navbar />
          </header>
          <h1 className="my-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-3xl">
            <span>
              <Trophy color="gold" size={40} />
            </span>
            Top achievers
            <span>
              <Trophy color="gold" size={40} />
            </span>
          </h1>
          <Suspense
            fallback={
              <div className="h-[50vh] w-full">
                <Loading />
              </div>
            }
          >
            <LeaderboardTable mapId={mapId} page={page} limit={limit} />
          </Suspense>
        </>
      </Container>
    </div>
  );
}
