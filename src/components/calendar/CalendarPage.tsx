//Framer
import { motion } from "framer-motion";
//Components
import PrimeCalendar from "./PrimeCalendar";
//Mui
import Chip from "@mui/material/Chip";
//Packages
import dayjs from "dayjs";
//Types
import { TrainerType } from "../../types/TrainerType";
import { useEffect, useState } from "react";

type Props = {
  choosedTrainer: TrainerType;
  image: string;
  choosedTime: string;
  handleTimeChange: (time: string) => void;
  handleDateChange: (date: Date) => void;
  date: Date | null;
};

function CalendarPage({
  handleTimeChange,
  choosedTime,
  handleDateChange,
  date,
  choosedTrainer,
  image,
}: Props) {
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    if (date) {
      setDateString(dayjs(date).format("YYYY.MM.DD"));
    }
  }, [date]);

  return (
    <div>
      <h2 className="text-center font-normal">for training with</h2>
      <div className="flex flex-col justify-center items-center gap-1 mt-1">
        <h2 className="text-center text-2xl">{choosedTrainer.firstname}</h2>
        <img
          className="object-cover w-[100px] h-[100px] rounded-full"
          src={image}
          alt=""
        />
      </div>
      <div className="m-4 flex gap-7 justify-between">
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
              {choosedTrainer.available
                .find((el) => el.day === dateString)
                ?.times.map((time, index) => (
                  <Chip
                    key={index}
                    sx={{
                      cursor: "pointer",
                      fontSize: "16px",
                      padding: "6px 3px",
                      m: "4px",
                    }}
                    color={choosedTime === time ? "success" : "default"}
                    label={time}
                    onClick={(e) => {
                      handleTimeChange(e.currentTarget.textContent!);
                    }}
                  />
                ))}
              {choosedTrainer.available.every((el) => el.day !== dateString) ? (
                <p className="text-center max-w-[200px] font-normal">
                  <strong>{choosedTrainer.firstname} </strong>
                  {`doesn't have free spaces left for this day :(`}
                </p>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

export default CalendarPage;
