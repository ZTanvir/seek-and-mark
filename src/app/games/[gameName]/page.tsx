import GameUi from "@/components/game-ui";
export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ gameName: string }>;
}) {
  const { gameName } = await params;
  console.log(gameName);
  return (
    <div className="cursor-custom w-full h-full ">
      <GameUi />
    </div>
  );
}
