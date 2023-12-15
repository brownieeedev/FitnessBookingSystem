//Framer
import { motion } from "framer-motion";
//MUI
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";

const defaultTimes = [
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export default function ChipsSelect() {
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const [sortedTimes, setSortedTimes] = useState<string[]>([]);
  console.log("sortedTimes", sortedTimes);
  //   console.log("selectedHours", selectedHours);

  useEffect(() => {
    if (selectedHours.length > 1) {
      const sortedTimes = [...selectedHours].sort((a, b) => {
        const [hoursA, minutesA] = a.split(":").map(Number);
        const [hoursB, minutesB] = b.split(":").map(Number);
        return hoursA - hoursB || minutesA - minutesB;
      });
      setSortedTimes(sortedTimes);
    }
  }, [selectedHours]);

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        transition: { duration: 0.1 },
      }}
      className="flex flex-col items-center"
    >
      <div className="max-w-[80%] flex flex-wrap justify-center">
        {defaultTimes.map((time, index) => (
          <Chip
            key={index}
            sx={{
              cursor: "pointer",
              fontSize: "16px",
              padding: "6px 3px",
              m: "4px",
            }}
            color={selectedHours.includes(time) ? "success" : "default"}
            label={time}
            onClick={(e) => {
              if (selectedHours.includes(e.currentTarget.textContent!)) {
                setSelectedHours((prev) =>
                  prev.filter((el) => el !== e.currentTarget.textContent!)
                );
              } else {
                setSelectedHours((prev) => [
                  ...prev,
                  e.currentTarget.textContent!,
                ]);
              }
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
