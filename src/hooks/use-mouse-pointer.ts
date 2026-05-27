import { useEffect, useState } from "react";

type MousePointer = {
  x: number;
  y: number;
};

export function useMousePointer() {
  const [mouseCoordinate, setMouseCoordinate] = useState<MousePointer | null>(
    null,
  );

  useEffect(() => {
    function clickEvent(event: MouseEvent) {
      setMouseCoordinate({ x: event.clientX, y: event.clientY });
    }
    document.addEventListener("click", clickEvent);
    return () => document.removeEventListener("click", clickEvent);
  }, []);
  return mouseCoordinate;
}
