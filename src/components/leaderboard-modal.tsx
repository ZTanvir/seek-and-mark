"use client";
import { useState } from "react";
import Modal from "./modal";
import Link from "next/link";

export default function LeaderboardModal() {
  const [isOpen, setIsOpen] = useState(false);
  function handleRetryBtn() {
    setIsOpen(false);
    // reset game state
  }

  return (
    <>
      <Modal isOpen={isOpen}>
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
