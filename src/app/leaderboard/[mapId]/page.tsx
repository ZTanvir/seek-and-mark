import { Trophy } from "lucide-react";

type LeaderboardMapPageProps = {
  params: Promise<{ mapId: string }>;
};

export default async function LeaderboardMapPage({
  params,
}: LeaderboardMapPageProps) {
  const { mapId } = await params;
  console.log({ mapId });
  return (
    <div>
      <h1 className="flex items-center gap-2 text-xl md:text-3xl">
        <span>
          <Trophy />
        </span>
        Top achievers
        <span>
          <Trophy />
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
          <tr className="transition-colors hover:bg-gray-50">
            <td className="px-6 py-4 font-medium text-gray-900">John Doe</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
