import { useEffect, useState } from "react";

export function useMousePointer() {
  const [mouseCoordinate, setMouseCoordinate] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    function clickEvent(event: MouseEvent) {
      setMouseCoordinate({ x: event.clientX, y: event.clientY });
    }
    document.addEventListener("click", clickEvent);
    return () => document.removeEventListener("click", clickEvent);
  }, []);
  return mouseCoordinate;
}
