import { Character } from "@/generated/prisma/client";
import Image from "next/image";
import { cn } from "@/lib/utils";

type GameCharactersListProps = {
  character: Character;
  onClickCharacter?: (id: number) => void;
  classname?: string;
};

export default function GameCharactersList({
  character,
  onClickCharacter,
  classname,
}: GameCharactersListProps) {
  return (
    <li
      onClick={() => onClickCharacter && onClickCharacter(character.id)}
      key={character.id}
      className={cn(
        "flex items-center gap-2 p-3 transition-colors duration-200 hover:bg-purple-300",
        classname,
      )}
    >
      <Image
        key={character.id}
        src={character.avatarUrl}
        width={50}
        height={50}
        className="h-[50px] w-[50px] rounded-xl object-cover object-top"
        alt={character.name}
      />
      <span className="text-md font-bold text-purple-500">
        {character.name}
      </span>
    </li>
  );
}
