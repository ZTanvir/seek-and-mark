import GameUi from "@/components/game-ui";
import { getMapByName } from "@/lib/dal/db-query";

export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ gameName: string }>;
}) {
  const { gameName } = await params;
  const map = await getMapByName(gameName);

  return (
    <div className="cursor-custom w-full h-full ">
      {map && <GameUi gameImage={map.imageUrl} />}
    </div>
  );
}
