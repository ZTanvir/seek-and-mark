"use client";
import { Map, Character } from "@/generated/prisma/client";
import GameUi from "./game-ui";
import { useState } from "react";
import GameStartModal from "./game-start-modal";
import LeaderboardModal from "./leaderboard-modal";
import { shuffle } from "@/lib/utils";
import { useIsGameStart } from "@/store/game-store";

type GameContainerProps = {
  map: Map;
  characters: Character[];
};

export default function GameContainer({ map, characters }: GameContainerProps) {
  const [isOpenLeaderboardModal, setIsOpenLeaderboardModal] = useState(false);
  const isGameStart = useIsGameStart();
  const charactersDisplay = 3;
  const roundCharacters = shuffle(characters).slice(0, charactersDisplay);

  const handleLeaderBoardModal = (isOpenModal: boolean) => {
    setIsOpenLeaderboardModal(isOpenModal);
  };
  return (
    <>
      <GameStartModal gameName={map.name} gameCharacters={roundCharacters} />

      <GameUi
        key={isGameStart ? 1 : 0}
        map={map}
        mapCharacters={roundCharacters}
        handleLeaderBoardModal={handleLeaderBoardModal}
      />
      <LeaderboardModal
        mapId={map.id}
        isOpenLeaderboardModal={isOpenLeaderboardModal}
        handleLeaderBoardModal={handleLeaderBoardModal}
      />
    </>
  );
}
