import { create } from "zustand";

type GameState = {
  isGameStart: boolean;
  userName: string;
  time: string;
  actions: {
    addUserName: (name: string) => void;
    start: () => void;
    stop: () => void;
    setTimer: (currentTime: string) => void;
  };
};

const useGameStore = create<GameState>((set) => ({
  isGameStart: false,
  userName: "",
  time: "",
  actions: {
    addUserName: (name: string) =>
      set(() => ({
        userName: name,
      })),
    start: () =>
      set(() => ({
        isGameStart: true,
      })),
    stop: () =>
      set(() => ({
        isGameStart: false,
      })),
    setTimer: (currentTime: string) => set(() => ({ time: currentTime })),
  },
}));

export const useIsGameStart = () => useGameStore((state) => state.isGameStart);
export const useGameUserName = () => useGameStore((state) => state.userName);
export const useGameTime = () => useGameStore((state) => state.time);

export const useGameControls = () => useGameStore((state) => state.actions);
