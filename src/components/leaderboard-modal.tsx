"use client";
import Modal from "./modal";
import Link from "next/link";
import type { GameState } from "@/types/components";

type LeaderboardModal = {
  isOpenLeaderboardModal: boolean;
  handleLeaderBoardModal: (isOpenModal: boolean) => void;
  handleGameState: (gameStart: boolean, userName: string, time: string) => void;
  gameState: GameState;
};

export default function LeaderboardModal({
  isOpenLeaderboardModal,
  handleLeaderBoardModal,
  gameState,
  handleGameState,
}: LeaderboardModal) {
  function handleRetryBtn() {
    handleLeaderBoardModal(false);
    // reset game state
    handleGameState(true, gameState.userName, "");
  }

  return (
    <>
      <Modal isOpen={isOpenLeaderboardModal}>
        <section className="relative h-full w-full p-6">
          <div className="absolute inset-0 -z-1 bg-black/90"></div>
          <header>
            <h2 className="text-center text-3xl font-bold text-purple-500 capitalize">
              LEADERBOARD
            </h2>
            <p className="text-center text-sm text-white">TOP SCORES</p>
          </header>

          <div className="my-5 w-xs md:w-md lg:w-lg">
            <div className="w-full">
              <p className="flex text-center text-xl text-purple-500">
                <span className="flex-1">USERNAME</span>
                <span className="flex-1">TIME</span>
              </p>
              <p className="flex text-center text-lg text-blue-400">
                <span className="flex-1">asad</span>
                <span className="flex-1">04:16:20</span>
              </p>
            </div>

            <p></p>
            <p className="text-center text-purple-300">That took a while...</p>
            <p className="text-center text-purple-300">But you did it!</p>
          </div>

          <footer className="flex flex-col gap-4">
            <button
              className="cursor-pointer rounded-xl bg-purple-800 px-5 py-2 font-bold text-white transition-colors duration-300 hover:bg-purple-700 focus:bg-purple-700"
              onClick={handleRetryBtn}
            >
              Retry
            </button>
            <Link
              className="rounded-xl bg-blue-600 px-5 py-2 text-center font-bold text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500"
              href="/leaderboard"
            >
              Leaderboard
            </Link>
          </footer>
        </section>
      </Modal>
    </>
  );
}
