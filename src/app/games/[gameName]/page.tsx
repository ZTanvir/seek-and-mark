export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ gameName: string }>;
}) {
  const { gameName } = await params;
  console.log(gameName);
  return (
    <div className="cursor-custom w-full h-full ">
      <h1>Robot city</h1>
    </div>
  );
}
