"use client";
import { Map, Character } from "@/generated/prisma/client";
import GameUi from "./game-ui";
import { useState } from "react";
import GameStartModal from "./game-start-modal";
import LeaderboardModal from "./leaderboard-modal";
import { shuffle } from "@/lib/utils";
import { useGameUserName, useIsGameStart } from "@/store/game-store";

type GameContainerProps = {
  map: Map;
  characters: Character[];
};

export default function GameContainer({ map, characters }: GameContainerProps) {
  const [gameState, setGameState] = useState({
    gameStart: false,
    userName: "",
    time: "",
  });
  const [isOpenLeaderboardModal, setIsOpenLeaderboardModal] = useState(false);

  const charactersDisplay = 3;
  const roundCharacters = shuffle(characters).slice(0, charactersDisplay);

  const handleGameState = (
    gameStart: boolean,
    userName: string,
    time: string,
  ) => {
    setGameState({ gameStart, userName, time });
  };
  const handleLeaderBoardModal = (isOpenModal: boolean) => {
    setIsOpenLeaderboardModal(isOpenModal);
  };
  return (
    <>
      <GameStartModal gameName={map.name} gameCharacters={roundCharacters} />

      <GameUi
        key={gameState.gameStart ? 1 : 0}
        map={map}
        mapCharacters={roundCharacters}
        gameState={gameState}
        handleGameState={handleGameState}
        handleLeaderBoardModal={handleLeaderBoardModal}
      />
      <LeaderboardModal
        mapId={map.id}
        isOpenLeaderboardModal={isOpenLeaderboardModal}
        handleLeaderBoardModal={handleLeaderBoardModal}
        gameState={gameState}
        handleGameState={handleGameState}
      />
    </>
  );
}
