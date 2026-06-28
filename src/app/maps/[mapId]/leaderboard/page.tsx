import { Trophy } from "lucide-react";
import { getTopLeaderboardData, leaderboardCount } from "@/lib/dal/db-query";
import { dateTimeToString } from "@/lib/utils";
import Pagination from "@/components/pagination";
import Navbar from "@/components/navbar";
import { Suspense } from "react";
import LeaderboardTable from "@/components/leaderboard-table";
import Loading from "../loading";

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
    <div>
      <header>
        <Navbar />
      </header>
      <h1 className="my-4 flex items-center justify-center gap-2 text-xl md:text-3xl">
        <span>
          <Trophy color="gold" />
        </span>
        Top achievers
        <span>
          <Trophy color="gold" />
        </span>
      </h1>
      <Suspense fallback={<Loading />}>
        <LeaderboardTable mapId={mapId} page={page} limit={limit} />
      </Suspense>
    </div>
  );
}
