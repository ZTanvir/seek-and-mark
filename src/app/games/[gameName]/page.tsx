import { getMapByName } from "@/lib/dal/db-query";
import ToastContainer from "@/components/toast-container";
import { shuffle } from "@/lib/utils";
import GameContainer from "@/components/game-cotainer";

export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ gameName: string }>;
}) {
  const { gameName } = await params;
  const map = await getMapByName(gameName);
  const selectThreeCharacters = 3;
  const characters =
    map && shuffle(map.characters).slice(0, selectThreeCharacters);
  return (
    <div className="cursor-custom relative h-full w-full">
      {map && characters && <GameContainer characters={characters} map={map} />}
      <ToastContainer />
    </div>
  );
}
