//Framer
import { motion } from "framer-motion";

//MUI
import Chip from "@mui/material/Chip";

//ReactCalendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Sample.css";

type Props = {
  time: string;
  handleTimeChange: (time: string) => void;
  handleDateChange: (date: Date) => void;
  date: Date | null;
};

export default function ReactCalendar({
  handleTimeChange,
  time,
  handleDateChange,
  date,
}: Props) {
  return (
    <div //CHOOSE DATE
    >
      <div className="mt-8">
        <h2 className="text-center font-bold text-2xl">Choose a date</h2>
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
                // tileContent={}
                minDate={new Date(Date.now())}
                onChange={(e) => {
                  handleDateChange(e as Date);
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
            <h2>Time</h2>
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