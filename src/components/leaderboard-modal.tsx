"use client";
import Modal from "./modal";
import Link from "next/link";

type LeaderboardModal = {
  isOpenLeaderboardModal: boolean;
  handleLeaderBoardModal: (isOpenModal: boolean) => void;
  handleGameState: (gameStart: boolean, userName: string, time: string) => void;
};

export default function LeaderboardModal({
  isOpenLeaderboardModal,
  handleLeaderBoardModal,
  handleGameState,
}: LeaderboardModal) {
  function handleRetryBtn() {
    handleLeaderBoardModal(false);
    // reset game state
    handleGameState(true, "", "");
  }

  return (
    <>
      <Modal isOpen={isOpenLeaderboardModal}>
        <section>
          <header>
            <h2>Leaderboard</h2>
            <p>top scores</p>
          </header>

          <div>
            <p></p>
            <p>That took a while...</p>
            <p>But you did it!</p>
          </div>

          <footer>
            <button onClick={handleRetryBtn}>Retry</button>
            <Link href="/leaderboard">Leaderboard</Link>
          </footer>
        </section>
      </Modal>
    </>
  );
}
