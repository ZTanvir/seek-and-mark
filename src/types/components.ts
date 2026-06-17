export type Toast = {
  id: number;
  message: string;
  msgType: "warning" | "error" | "success";
};

export type GameState = {
  gameStart: boolean;
  userName: string;
  time: string;
};
