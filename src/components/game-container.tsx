"use client";
import { Map, Character } from "@/generated/prisma/client";
import GameUi from "./game-ui";
import { useState } from "react";
import type { GameState } from "@/types/components";
import GameStartModal from "./game-start-modal";
import LeaderboardModal from "./leaderboard-modal";
import { shuffle } from "@/lib/utils";

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

  const roundCharacters = shuffle(characters).slice(0, 3);

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
        gameCharacters={roundCharacters}
        handleGameState={handleGameState}
      />

      <GameUi
        key={gameState.gameStart ? 1 : 0}
        map={map}
        mapCharacters={roundCharacters}
        gameState={gameState}
        handleGameState={handleGameState}
        handleLeaderBoardModal={handleLeaderBoardModal}
      />
      <LeaderboardModal
        map={map.id}
        isOpenLeaderboardModal={isOpenLeaderboardModal}
        handleLeaderBoardModal={handleLeaderBoardModal}
        gameState={gameState}
        handleGameState={handleGameState}
      />
    </>
  );
}
