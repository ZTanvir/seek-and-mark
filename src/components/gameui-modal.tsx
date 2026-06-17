"use client";

import { useState } from "react";
import Modal from "./modal";
import Image from "next/image";
import modalBgImg from "../../public/images/modal-bg.jpg";
import { Character } from "@/generated/prisma/client";
import GameCharactersList from "./game-character-list";

type GameUiModalProps = {
  children: React.ReactNode;
  gameName: string;
  gameCharacters: Character[];
};
export default function GameUiModal({
  children,
  gameName,
  gameCharacters,
}: GameUiModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Modal isOpen={isOpen}>
        <div className="relative h-full w-full">
          <Image
            src={modalBgImg}
            className="object-cover"
            alt="modal background image"
            width={590}
            height={540}
            priority={true}
          />
          <section className="absolute inset-0 z-4 flex h-full flex-col gap-3 bg-black/80 p-6 text-purple-400 md:left-[40%]">
            <h2 className="text-center text-2xl font-bold capitalize md:text-4xl">
              {gameName}
            </h2>
            <p>Beep beep! I am Zahirul. And you are?</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                name="username"
                id="username"
                required
                className="mb-2 w-full rounded-lg border border-purple-500 p-2 text-white"
              />
              <p className="mb-4">
                Goodness! It&apos;s you. I truly need your cooperation.
              </p>
              <p className="mb-4">
                Please help me find these disoriented robots!
              </p>
              <div>
                {gameCharacters.map((character) => (
                  <GameCharactersList
                    classname="p-0 mb-4 hover:bg-transparent"
                    key={character.id}
                    character={character}
                  />
                ))}
              </div>
              <button
                type="submit"
                // onClick={() => setIsOpen(false)}
                className="mt-2 w-full rounded-lg bg-purple-700 p-2 font-bold text-white transition-colors duration-300 hover:cursor-pointer hover:bg-purple-600 focus:bg-purple-700"
              >
                Start
              </button>
            </form>
          </section>
        </div>
      </Modal>
      {children}
    </div>
  );
}
