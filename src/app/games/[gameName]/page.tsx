import { getMapByName } from "@/lib/dal/db-query";
import ToastContainer from "@/components/toast-container";
import GameContainer from "@/components/game-container";

export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ gameName: string }>;
}) {
  const { gameName } = await params;
  const map = await getMapByName(gameName);
  return (
    <div className="cursor-custom relative h-full w-full">
      {map && <GameContainer characters={map.characters} map={map} />}
      <ToastContainer />
    </div>
  );
}
