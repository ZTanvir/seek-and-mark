"use client";
import Image from "next/image";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useRef, useState } from "react";
import CountDownTimer from "./count-down-timer";

type GameUi = {
  gameImage: string;
};

export default function GameUi({ gameImage }: GameUi) {
  console.log("game image", gameImage);
  const [characterBoxState, setCharacterBoxState] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const selectCharacterRef = useRef(null!);
  useClickOutside(selectCharacterRef, handleClickOutside);

  function handleClickOutside() {
    setCharacterBoxState((prev) => ({ ...prev, visible: false }));
  }

  function handleClickInside(event: React.MouseEvent) {
    console.log("coordinate", characterBoxState);
    const target = event.target as HTMLElement;
    console.log(target.dataset.character);
  }

  function handleAreaClick(event: React.MouseEvent<HTMLDivElement>) {
    if (characterBoxState.visible) return;
    const adjustMouseCenterPoint = 10;
    const xAxis = event.clientX + adjustMouseCenterPoint;
    const yAxis = event.clientY + adjustMouseCenterPoint;
    console.log("coordinate", event.clientX, event.clientY);
    setCharacterBoxState({ x: xAxis, y: yAxis, visible: true });
  }

  function handleImageClick(event: React.MouseEvent<HTMLImageElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    console.log("image", rect);

    const xPixel = event.clientX - rect.left;
    const yPixel = event.clientY - rect.top;
    const xPercent = (xPixel / rect.width) * 100;
    const yPercent = (yPixel / rect.height) * 100;
    console.log("pixel", xPercent, yPercent);
  }

  return (
    <div onClick={handleAreaClick} className="relative w-full min-h-screen">
      <header className="fixed z-1">
        <CountDownTimer />
      </header>
      <Image
        onClick={handleImageClick}
        src={gameImage}
        priority={true}
        alt="robot city"
        width={1920}
        height={2689}
        className="absolute w-full h-auto"
      />
      {characterBoxState.visible && (
        <section
          onClick={handleClickInside}
          ref={selectCharacterRef}
          style={{
            left: characterBoxState.x,
            top: characterBoxState.y,
          }}
          className="fixed select-none z-1"
        >
          <ul className="bg-gray-900/70 w-50 rounded-lg overflow-hidden">
            <li
              data-character="dog"
              className="p-2 text-center hover:bg-purple-300 transition-colors duration-200"
            >
              dog
            </li>
            <li
              data-character="cat"
              className="p-2 text-center hover:bg-purple-200 transition-colors duration-200"
            >
              cat
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}
