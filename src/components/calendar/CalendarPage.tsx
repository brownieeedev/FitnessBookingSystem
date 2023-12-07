import React from "react";
//Framer
import { motion } from "framer-motion";
//Components
import PrimeCalendar from "./PrimeCalendar";
//Mui
import Chip from "@mui/material/Chip";

type Props = {
  choosedTrainer: string;
  image: React.ReactNode;
  time: string;
  handleTimeChange: (time: string) => void;
  handleDateChange: (date: Date) => void;
  date: Date | null;
};

function CalendarPage({
  handleTimeChange,
  time,
  handleDateChange,
  date,
  choosedTrainer,
  image,
}: Props) {
  return (
    <div>
      <h2 className="text-center font-normal">for training with</h2>
      <div className="flex flex-col justify-center items-center gap-1 mt-1">
        <h2 className="text-center text-2xl">{choosedTrainer}</h2>
        {image}
      </div>
      <div className="m-4 flex justify-between">
        <PrimeCalendar handleDateChange={handleDateChange} date={date} />
        {date ? (
          <motion.div
            animate={{
              opacity: [0, 1],
              transition: { duration: 0.1 },
            }}
            className="flex flex-col"
          >
            <h2 className="text-center">Time</h2>
            <div>
              <Chip
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "6px 3px",
                  m: "4px",
                }}
                label="10:00"
                color={time === "10:00" ? "success" : "default"}
                onClick={(e) => {
                  handleTimeChange(e.currentTarget.textContent!);
                }}
              />
              <Chip
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "6px 3px",
                  m: "4px",
                }}
                label="11:00"
                color={time === "11:00" ? "success" : "default"}
                onClick={(e) => {
                  handleTimeChange(e.currentTarget.textContent!);
                }}
              />
              <Chip
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "6px 3px",
                  m: "4px",
                }}
                label="13:00"
                color={time === "13:00" ? "success" : "default"}
                onClick={(e) => {
                  handleTimeChange(e.currentTarget.textContent!);
                }}
              />
              <Chip
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "6px 3px",
                  m: "4px",
                }}
                label="17:00"
                color={time === "17:00" ? "success" : "default"}
                onClick={(e) => {
                  handleTimeChange(e.currentTarget.textContent!);
                }}
              />
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

export default CalendarPage;
