"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { useClickOutside } from "@/hooks/use-click-outside";
import CountDownTimer from "./count-down-timer";
import { Character } from "@/generated/prisma/client";
import { addLeaderboard, validateCharacter } from "@/actions/game";
import { useToastContext } from "@/hooks/context";
import GameCharactersList from "./game-character-list";
import Logo from "./logo";
import type { GameState } from "@/types/components";
import { stringToDateTime } from "@/lib/utils";
import { Map } from "@/generated/prisma/client";

type GameUi = {
  map: Map;
  mapCharacters: Character[];
  gameState: GameState;
  handleGameState: (gameStart: boolean, userName: string, time: string) => void;
  handleLeaderBoardModal: (isOpenModal: boolean) => void;
};

type CharacterLocation = {
  xPercent: number;
  yPercent: number;
};

export default function GameUi({
  map,
  mapCharacters,
  gameState,
  handleGameState,
  handleLeaderBoardModal,
}: GameUi) {
  const [characterBoxState, setCharacterBoxState] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const [characterLocation, setCharacterLocation] =
    useState<null | CharacterLocation>(null);
  const [characters, setCharacters] = useState(
    mapCharacters.map((character) => ({ ...character, isFound: false })),
  );
  const selectCharacterRef = useRef(null!);
  const headerRef = useRef<HTMLElement>(null!);
  const countdownTimerRef = useRef<HTMLSpanElement>(null!);
  useClickOutside(selectCharacterRef, handleClickOutside);
  const { addToast } = useToastContext();

  function handleClickOutside() {
    setCharacterBoxState((prev) => ({ ...prev, visible: false }));
  }

  async function handleClickInside(characterId: number) {
    if (!characterLocation) return;

    const result = await validateCharacter(
      characterId,
      characterLocation.xPercent,
      characterLocation.yPercent,
    );
    if (result.success) {
      addToast(result.message, "success");
      const updatedCharacters = characters.map((character) =>
        character.id == characterId
          ? { ...character, isFound: true }
          : character,
      );
      setCharacters(updatedCharacters);

      const isGameOver = updatedCharacters.every(
        (character) => character.isFound,
      );
      if (isGameOver) {
        handleLeaderBoardModal(true);
        const countDownTime = countdownTimerRef.current.textContent;
        const timeToDate = stringToDateTime(countDownTime);
        // add score to db leaderboard table
        await addLeaderboard({
          mapId: map.id,
          userId: null,
          username: gameState.userName,
          endTime: timeToDate,
          durationMs: timeToDate.getTime(),
        });
        handleGameState(false, gameState.userName, countDownTime);
      }
    } else {
      addToast(result.message, "error");
    }
    setCharacterBoxState((prev) => ({ ...prev, visible: false }));
  }

  function handleAreaClick(event: React.MouseEvent<HTMLDivElement>) {
    if (
      headerRef.current.contains(event.target as Node) ||
      characterBoxState.visible
    )
      return;
    const adjustMouseCenterPoint = 10;
    const xAxis = event.pageX + adjustMouseCenterPoint;
    const yAxis = event.pageY + adjustMouseCenterPoint;
    setCharacterBoxState({ x: xAxis, y: yAxis, visible: true });
  }

  function handleImageClick(event: React.MouseEvent<HTMLImageElement>) {
    if (characterBoxState.visible) return;
    const rect = event.currentTarget.getBoundingClientRect();

    const xPixel = event.clientX - rect.left;
    const yPixel = event.clientY - rect.top;
    const xPercent = ((xPixel / rect.width) * 100).toFixed(2);
    const yPercent = ((yPixel / rect.height) * 100).toFixed(2);
    setCharacterLocation({
      xPercent: parseFloat(xPercent),
      yPercent: parseFloat(yPercent),
    });
  }

  return (
    <div onClick={handleAreaClick} className="relative min-h-screen w-full">
      <header
        ref={headerRef}
        className="fixed z-1 flex w-full justify-between gap-x-4 p-4"
      >
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="flex gap-4">
          {characters.map((character) => (
            <div
              key={character.id}
              className="relative w-[60px] sm:h-[75px] sm:w-[90px]"
            >
              {character.isFound && (
                <div className="absolute inset-0 z-1 rounded-xl bg-black/80"></div>
              )}
              <Image
                src={character.avatarUrl}
                width={75}
                height={90}
                className="h-full w-full rounded-xl border-2 border-purple-500 object-cover object-top"
                alt="game avatar"
              />
            </div>
          ))}
        </div>
        <div className="max-w-[200px] sm:max-w-xs">
          <CountDownTimer
            ref={countdownTimerRef}
            startCountDown={gameState.gameStart}
          />
        </div>
      </header>
      <Image
        onClick={handleImageClick}
        src={map.imageUrl}
        alt="robot city"
        width={1910}
        height={2689}
        className="absolute inset-0 min-h-[2689px] min-w-[1910px] lg:min-h-auto lg:min-w-full"
      />
      {characterBoxState.visible && (
        <section
          ref={selectCharacterRef}
          style={{
            left: characterBoxState.x,
            top: characterBoxState.y,
          }}
          className="absolute z-2 w-3xs select-none"
        >
          <ul className="w-full overflow-hidden rounded-lg bg-gray-900/90">
            {characters.map(
              (character) =>
                character.isFound === false && (
                  <GameCharactersList
                    key={character.id}
                    character={character}
                    onClickCharacter={() => handleClickInside(character.id)}
                  />
                ),
            )}
          </ul>
        </section>
      )}
    </div>
  );
}
