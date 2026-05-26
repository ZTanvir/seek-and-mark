export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ gameName: string }>;
}) {
  const { gameName } = await params;
  console.log(gameName);
  return (
    <div>
      <h1>Robot city</h1>
    </div>
  );
}
