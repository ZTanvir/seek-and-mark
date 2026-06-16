import GameUi from "@/components/game-ui";
import { getMapByName } from "@/lib/dal/db-query";
import ToastContainer from "@/components/toast-container";
import { shuffle } from "@/lib/utils";
import GameUiModal from "@/components/gameui-modal";

export default async function GamePlayPage({
  params,
}: {
  params: Promise<{ gameName: string }>;
}) {
  const { gameName } = await params;
  const map = await getMapByName(gameName);
  const characters = map && shuffle(map.characters).slice(0, 3);
  return (
    <div className="cursor-custom relative h-full w-full">
      {map && characters && (
        <GameUiModal gameName={map.name} gameCharacters={characters}>
          <GameUi gameImage={map.imageUrl} mapCharacters={characters} />
        </GameUiModal>
      )}
      <ToastContainer />
    </div>
  );
}
