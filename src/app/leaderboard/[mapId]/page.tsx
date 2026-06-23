type LeaderboardMapPageProps = {
  params: Promise<{ mapId: string }>;
};

export default async function LeaderboardMapPage({
  params,
}: LeaderboardMapPageProps) {
  const { mapId } = await params;
  console.log({ mapId });
  return <div>page</div>;
}
