"use client";
import Image from "next/image";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useRef, useState } from "react";
import CountDownTimer from "./count-down-timer";
import { Character } from "@/generated/prisma/client";
import Logo from "./logo";

type GameUi = {
  gameImage: string;
  characters: Character[];
};

type CharacterLocation = {
  xPercent: number;
  yPercent: number;
};

export default function GameUi({ gameImage, characters }: GameUi) {
  const [characterBoxState, setCharacterBoxState] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const [characterLocation, setCharacterLocation] =
    useState<null | CharacterLocation>(null);

  const selectCharacterRef = useRef(null!);
  useClickOutside(selectCharacterRef, handleClickOutside);

  function handleClickOutside() {
    setCharacterBoxState((prev) => ({ ...prev, visible: false }));
  }

  function handleClickInside(event: React.MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    console.log(target.dataset.character);
    console.log("characterLocation", characterLocation);
  }

  function handleAreaClick(event: React.MouseEvent<HTMLDivElement>) {
    if (characterBoxState.visible) return;
    const adjustMouseCenterPoint = 10;
    const xAxis = event.pageX + adjustMouseCenterPoint;
    const yAxis = event.pageY + adjustMouseCenterPoint;
    console.log("coordinate", { x: event.pageX, y: event.pageY });
    setCharacterBoxState({ x: xAxis, y: yAxis, visible: true });
  }

  function handleImageClick(event: React.MouseEvent<HTMLImageElement>) {
    if (characterBoxState.visible) return;
    const rect = event.currentTarget.getBoundingClientRect();

    const xPixel = event.clientX - rect.left;
    const yPixel = event.clientY - rect.top;
    const xPercent = ((xPixel / rect.width) * 100).toFixed(2);
    const yPercent = ((yPixel / rect.height) * 100).toFixed(2);
    // console.log("pixel", xPercent, yPercent);
    setCharacterLocation({
      xPercent: parseFloat(xPercent),
      yPercent: parseFloat(yPercent),
    });
  }

  return (
    <div onClick={handleAreaClick} className="relative min-h-screen w-full">
      <header className="fixed z-1 flex w-full justify-between p-4">
        <Logo />
        <div className="flex gap-4">
          {characters.map((character) => (
            <Image
              key={character.id}
              src={character.avatarUrl}
              width={200}
              height={200}
              className="h-[70px] w-[100px] rounded-xl border-2 border-purple-500 object-cover object-top"
              alt={character.name}
            />
          ))}
        </div>
        <CountDownTimer />
      </header>
      <Image
        onClick={handleImageClick}
        src={gameImage}
        priority={true}
        alt="robot city"
        width={1920}
        height={2689}
        className="absolute h-auto w-full"
      />
      {characterBoxState.visible && (
        <section
          ref={selectCharacterRef}
          style={{
            left: characterBoxState.x,
            top: characterBoxState.y,
          }}
          className="absolute z-2 min-w-[250px] select-none"
        >
          <ul className="w-full overflow-hidden rounded-lg bg-gray-900/90">
            {characters.map((character) => (
              <li
                onClick={handleClickInside}
                key={character.id}
                data-character={character.id}
                className="flex items-center gap-2 p-3 transition-colors duration-200 hover:bg-purple-300"
              >
                <Image
                  key={character.id}
                  src={character.avatarUrl}
                  width={50}
                  height={50}
                  className="flex h-[50px] w-[50px] rounded-xl object-cover object-top"
                  alt={character.name}
                />
                <span className="font-3xl font-bold text-purple-500">
                  {character.name}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
