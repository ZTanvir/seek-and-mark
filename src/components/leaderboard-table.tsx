import { getTopLeaderboardData, leaderboardCount } from "@/lib/dal/db-query";
import Pagination from "./pagination";
import { dateTimeToString } from "@/lib/utils";

type LeaderboardTableProps = {
  mapId: string;
  page: number;
  limit: number;
};
export default async function LeaderboardTable({
  mapId,
  page,
  limit,
}: LeaderboardTableProps) {
  const skipData = limit * (page - 1);
  const leaderboardData = await getTopLeaderboardData(
    limit,
    Number(mapId),
    skipData,
  );
  const totalLeaderboardData = await leaderboardCount();

  return (
    <div>
      <table className="text-md w-full table-auto overflow-hidden rounded-lg text-left text-gray-500">
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
                  {index + 1 + (page - 1) * 10}
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
          classname="my-4"
        />
      )}
    </div>
  );
}
