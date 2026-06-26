import { getMapByName } from "@/lib/dal/db-query";
import ToastContainer from "@/components/toast-container";
import GameContainer from "@/components/game-container";

export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ map: string }>;
}) {
  const { map } = await params;
  const mapData = await getMapByName(map);
  return (
    <div className="cursor-custom relative h-full w-full">
      {mapData && (
        <GameContainer characters={mapData.characters} map={mapData} />
      )}
      <ToastContainer />
    </div>
  );
}
