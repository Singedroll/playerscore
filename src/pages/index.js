import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const userlist = ["Tergeltengis", "Dashnyam", "Dorjkhand", "Buyannemeh"];

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className="text-center">
      <button
        className="rounded w-24 h-10 bg-slate-400"
        onClick={() => setIndex(index + 1)}
      >
        Sum
      </button>
      <p>{index}</p>
      <button
        className="rounded w-24 h-10 bg-slate-400"
        onClick={() => setIndex(index - 1)}
      >
        Sub
      </button>
      {userlist.map((element) => {
        return <p element={element}>{element}</p>;
      })}
    </div>
  );
}
