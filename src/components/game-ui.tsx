"use client";
import { useMousePointer } from "@/hooks/use-mouse-pointer";
export default function GameUi() {
  const Pointer = useMousePointer();
  console.log(Pointer);
  return <div>game ui</div>;
}
