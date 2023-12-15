import { useState } from "react";

//Framer
import { motion } from "framer-motion";

type TabProps = {
  handleTabChange: (tab: number) => void;
  tab: number;
};

export default function Tabs({ handleTabChange, tab }: TabProps) {
  return (
    <div className="border border-white rounded-full flex justify-between  items-center">
      <button
        onClick={() => {
          handleTabChange(1);
        }}
        className={
          tab === 1
            ? "w-[100px]  py-2 rounded-full bg-blue text-white"
            : "w-[100px]  py-2 rounded-full"
        }
      >
        All
      </button>
      <motion.button
        onClick={() => {
          handleTabChange(2);
        }}
        className={
          tab === 2
            ? "w-[100px]  py-2 rounded-full bg-blue text-white"
            : "w-[100px]  py-2 rounded-full"
        }
      >
        Today
      </motion.button>
    </div>
  );
}
