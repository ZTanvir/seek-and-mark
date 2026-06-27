import { Trophy } from "lucide-react";
import { getTopLeaderboardData, leaderboardCount } from "@/lib/dal/db-query";
import { dateTimeToString } from "@/lib/utils";
import Pagination from "@/components/pagination";

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
  const skipData = limit * (page - 1);
  const leaderboardData = await getTopLeaderboardData(
    limit,
    Number(mapId),
    skipData,
  );
  const totalLeaderboardData = await leaderboardCount();
  return (
    <div>
      <h1 className="flex items-center justify-center gap-2 text-xl md:text-3xl">
        <span>
          <Trophy color="gold" />
        </span>
        Top achievers
        <span>
          <Trophy color="gold" />
        </span>
      </h1>
      <table className="text-md w-full table-auto text-left text-gray-500">
        <thead className="w-full border-b border-gray-200 bg-gray-50 text-sm font-semibold text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-4">
              Rank
            </th>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Time
            </th>
            <th scope="col" className="px-6 py-4">
              Map
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {leaderboardData &&
            leaderboardData.map((leader, index) => (
              <tr
                key={leader.id}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {leader.username}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {dateTimeToString(leader.endTime)}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 capitalize">
                  {leader.map.name}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {leaderboardData && totalLeaderboardData && (
        <Pagination
          totalData={totalLeaderboardData}
          dataPerPage={limit}
          currentPage={page}
        />
      )}
    </div>
  );
}
