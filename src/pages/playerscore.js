import { useState, useEffect, useRef } from "react";
import PlayerScore from "../components/Score";
import TrophyIcon from "../components/icons/TropyIcon";

const initialPlayers = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 10,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 8,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
];

const ScorePage = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Check if any player has reached a score of 20
    const highestScorer = players.reduce((prev, current) =>
      prev.playerScore > current.playerScore ? prev : current
    );

    if (highestScorer.playerScore >= 20) {
      setWinner(`${highestScorer.playerName} wins!`);
      setGameOver(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  }, [players]);

  const resetScores = () => {
    setPlayers(initialPlayers);
    setWinner("");
    setGameOver(false);
  };

  const updateScore = (id, newScore) => {
    if (!gameOver) {
      const updatedPlayers = players.map((player) =>
        player.id === id ? { ...player, playerScore: newScore } : player
      );
      setPlayers(updatedPlayers);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col w-[530px] mx-auto border border-solid rounded-3xl p-8 absolute left-1/3 mt-36 ">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="w-[426.53px] h-[34px] font-bold text-3xl">
                Player Score
              </p>
              <div className="flex justify-center items-center">
                <TrophyIcon />
              </div>
            </div>
            {winner && <p className="text-sm text-[#827878]">{winner}</p>}
          </div>
          <div className="flex flex-col">
            {players.map((player) => (
              <PlayerScore
                key={player.id}
                score={player.playerScore}
                playerName={player.playerName}
                onScoreChange={(newScore) => updateScore(player.id, newScore)}
              />
            ))}
          </div>
          <div className="flex justify-end mt-20">
            <button
              onClick={resetScores}
              className="p-4 bg-[#14B166] text-white rounded-lg w-32 "
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src="/JohnCena.mp3" />
    </div>
  );
};

export default ScorePage;
