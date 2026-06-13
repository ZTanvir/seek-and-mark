import GameUi from "@/components/game-ui";
import { getMapByName } from "@/lib/dal/db-query";
import ToastContainer from "@/components/toast-container";

export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ gameName: string }>;
}) {
  const { gameName } = await params;
  const map = await getMapByName(gameName);
  // console.log("map", map);
  return (
    <div className="cursor-custom relative h-full w-full">
      {map && <GameUi gameImage={map.imageUrl} characters={map.characters} />}
      <ToastContainer />
    </div>
  );
}
