import { set } from "date-fns";
import { useState } from "react";

export default function Tabs() {
  const [currentState, setCurrentState] = useState<number>(1);
  return (
    <div className="border  border-white rounded-full flex justify-between gap-2 items-center">
      <div
        onClick={() => {
          setCurrentState(1);
        }}
        className={
          currentState === 1
            ? "p-1 pt-[1px] px-5 flex justify-between bg-blue text-white"
            : "p-1 pt-[1px] px-5 flex justify-between"
        }
      >
        <button className="border  p-3 px-8 rounded-full">All</button>
      </div>
      <div
        onClick={() => {
          setCurrentState(2);
        }}
        className={
          currentState === 2
            ? "p-1 pt-[1px] px-5 flex justify-between"
            : "p-1 pt-[1px] px-5 flex justify-between"
        }
      >
        <button className="">Today</button>
      </div>
    </div>
  );
}
