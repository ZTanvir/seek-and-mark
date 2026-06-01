"use client";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useRef, useState } from "react";
export default function GameUi() {
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
    setCharacterBoxState({ x: xAxis, y: yAxis, visible: true });
  }

  return (
    <div onClick={handleAreaClick} className="w-full h-full overflow-hidden">
      {characterBoxState.visible && (
        <section
          onClick={handleClickInside}
          ref={selectCharacterRef}
          style={{
            left: characterBoxState.x,
            top: characterBoxState.y,
          }}
          className="fixed select-none"
        >
          <ul className="bg-gray-900/50 w-50 rounded-lg overflow-hidden">
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
