//Framer
import { motion } from "framer-motion";

//MUI
import Chip from "@mui/material/Chip";

//ReactCalendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Sample.css";

//Packages
import dayjs from "dayjs";

type Props = {
  time: string;
  handleTimeChange: (time: string) => void;
  handleDateChange: (date: string) => void;
  date: string | null;
  choosedTrainer: string;
  image: React.ReactNode;
};

export default function ReactCalendar({
  handleTimeChange,
  time,
  handleDateChange,
  date,
  choosedTrainer,
  image,
}: Props) {
  return (
    <div //CHOOSE DATE
    >
      <h2 className="text-center font-normal">for training with</h2>
      <div className="flex flex-col justify-center items-center gap-1 mt-1">
        <h2 className="text-center text-2xl">{choosedTrainer}</h2>
        {image}
      </div>
      <div className="flex justify-between">
        <div className="Sample flex justify-center items-center">
          <div className="Sample__container">
            <main className="Sample__container__content">
              <Calendar
                maxDetail="month"
                locale="en-GB"
                showNavigation={false}
                showWeekNumbers={false}
                value={date}
                // tileContent={}
                formatDay={(locale, date) => dayjs(date).format("D")}
                minDate={new Date(Date.now())}
                onChange={(e) => {
                  handleDateChange(
                    dayjs(e as Date).format("YYYY.MM.DD") as any
                  );
                }}
              />
            </main>
          </div>
        </div>
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
