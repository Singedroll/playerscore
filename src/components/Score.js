import React from "react";

const PlayerScore = ({ score, playerName, onScoreChange }) => {
  const incrementScore = () => {
    onScoreChange(score + 1);
  };

  const decrementScore = () => {
    onScoreChange(score - 1);
  };

  return (
    <div>
      <div className="flex gap-10">
        <div className="flex flex-col w-[530px] mx-auto ">
          <div className="flex justify-between py-4">
            <p>{playerName}</p>
            <div className="flex justify-between gap-3 border border-solid rounded-full w-[128px] h-[40px] items-center bg-[#F2F2F2]">
              <button
                onClick={decrementScore}
                className="border border-none rounded-full p-2 w-10 h-10 flex items-center justify-center text-xl bg-[#FFFFFF]"
              >
                -
              </button>
              <p>{score}</p>
              <button
                onClick={incrementScore}
                className="border border-none rounded-full p-2 w-10 h-10 flex items-center justify-center text-xl bg-[#FFFFFF]"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] w-[466] border border-solid border-opacity-10 "></div>
    </div>
  );
};

export default PlayerScore;
