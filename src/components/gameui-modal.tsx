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
        <div className="relative">
          <Image
            src={modalBgImg}
            alt="object-cover w-full h-auto"
            width={590}
            height={540}
            priority={true}
          />
          <section className="absolute top-0 left-[40%] z-4 flex h-full flex-col gap-3 bg-black/80 p-6 text-purple-400">
            <h2 className="text-center text-2xl font-bold capitalize md:text-4xl">
              {gameName}
            </h2>
            <p>Beep beep! I am Zahirul. And you are?</p>

            <input
              type="text"
              name="username"
              id="username"
              required
              className="rounded-lg border border-purple-500 p-2 text-white"
            />
            <p>
              Goodness! It&apos;s you. I truly need your cooperation. Please
              help me find these disoriented robots!
            </p>
            <div>
              {gameCharacters.map((character) => (
                <GameCharactersList
                  classname="p-0 mb-2 hover:bg-transparent"
                  key={character.id}
                  character={character}
                />
              ))}
            </div>
            <button
              type="submit"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-purple-700 p-2 font-bold text-white transition-colors duration-300 hover:cursor-pointer hover:bg-purple-600 focus:bg-purple-700"
            >
              Start
            </button>
          </section>
        </div>
      </Modal>
      {children}
    </div>
  );
}
