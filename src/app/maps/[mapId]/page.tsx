import { getMapById } from "@/lib/dal/db-query";
import ToastContainer from "@/components/toast-container";
import GameContainer from "@/components/game-container";

export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ mapId: string }>;
}) {
  const { mapId } = await params;
  const mapData = await getMapById(Number(mapId));
  return (
    <div className="cursor-custom relative h-full w-full">
      {mapData && (
        <GameContainer characters={mapData.characters} map={mapData} />
      )}
      <ToastContainer />
    </div>
  );
}
