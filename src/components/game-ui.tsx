"use client";
import { useMousePointer } from "@/hooks/use-mouse-pointer";
export default function GameUi() {
  const Pointer = useMousePointer();
  console.log(Pointer);
  return (
    <div className="relative w-full h-full">
      game ui
      {Pointer && (
        <section
          style={{ left: Pointer.x, top: Pointer.y }}
          className="absolute"
        >
          <ul className="bg-gray-900/50 w-50 rounded-lg overflow-hidden">
            <li className="p-2 text-center hover:bg-purple-300 transition-colors duration-200">
              dog
            </li>
            <li className="p-2 text-center hover:bg-purple-300 transition-colors duration-200">
              cat
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}
