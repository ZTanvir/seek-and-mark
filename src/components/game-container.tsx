"use client";
import { Map, Character } from "@/generated/prisma/client";
import GameUi from "./game-ui";
import { useState } from "react";
import type { GameState } from "@/types/components";
import GameStartModal from "./game-start-modal";
import LeaderboardModal from "./leaderboard-modal";

type GameContainerProps = {
  map: Map;
  characters: Character[];
};

export default function GameContainer({ map, characters }: GameContainerProps) {
  const [gameState, setGameState] = useState<GameState>({
    gameStart: false,
    userName: "",
    time: "",
  });
  const [isOpenLeaderboardModal, setIsOpenLeaderboardModal] = useState(false);

  const handleGameState = (
    gameStart: boolean,
    userName: string,
    time: string,
  ) => {
    console.log("Handle game state:", gameStart, userName, time);

    setGameState({ gameStart, userName, time });
  };
  const handleLeaderBoardModal = (isOpenModal: boolean) => {
    setIsOpenLeaderboardModal(isOpenModal);
  };
  return (
    <>
      <GameStartModal
        gameName={map.name}
        gameCharacters={characters}
        handleGameState={handleGameState}
      />
      <GameUi
        gameImage={map.imageUrl}
        mapCharacters={characters}
        gameState={gameState}
        handleGameState={handleGameState}
        handleLeaderBoardModal={handleLeaderBoardModal}
      />
      <LeaderboardModal
        isOpenLeaderboardModal={isOpenLeaderboardModal}
        handleLeaderBoardModal={handleLeaderBoardModal}
        handleGameState={handleGameState}
      />
    </>
  );
}
