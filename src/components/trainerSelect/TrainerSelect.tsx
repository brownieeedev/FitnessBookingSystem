import { useState } from "react";

//Components
import TrainerCard from "./TrainerCard";
import BottomNavigation from "../bottomNavigation/BottomNavigation";
import VerticalStepper from "../verticalStepper/VerticalStepper";
import ReactCalendar from "../react-calendar/ReactCalendar";
import Confirm from "../bookConfirm.tsx/Confirm";
import TrainerCardSmall from "./TrainerCardSmall";

const numberOfSteps = 3;
const todoLabels: string[] = [
  "Choose a trainer",
  "Choose a date",
  "Confirmation",
];

export default function TrainerSelect() {
  const [choosedTrainer, setChoosedTrainer] = useState("");
  const [page, setPage] = useState<number>(1);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");

  console.log(page);
  console.log(choosedTrainer);
  console.log(date);
  console.log(time);

  const handleTrainerSelect = (name: string): void => {
    setChoosedTrainer(name);
    setTime("");
    setDate(null);
  };

  const handleConfirm = () => {
    alert("Confirmed!");
  };

  const handleNavigationClick = (direction: string): void => {
    if (direction === "next") {
      if (page === numberOfSteps) {
        handleConfirm();
        return;
      }
      setPage((prev) => prev + 1);
    } else if (direction === "previous") {
      if (page === 1) return;
      setPage((prev) => prev - 1);
    }
  };

  const handleTimeChange = (time: string): void => {
    setTime(time);
  };

  const handleDateChange = (date: Date): void => {
    setDate(date);
  };

  return (
    <div className="select-none bg-slate-50 font-inter font-bold w-[85%] flex border bg-transparent min-h-[550px] max-w-[1200px] ">
      <div //Sidepanel
        className="w-[35%] h-auto flex items-center justify-center left-0 bg-darkgray"
      >
        <VerticalStepper
          currentStep={page}
          steps={[
            {
              num: 1,
              title: "Choose a trainer",
            },
            {
              num: 2,
              title: "Choose a date",
            },
            {
              num: 3,
              title: "Confirm",
            },
          ]}
        />
      </div>
      <div className="relative flex flex-col w-full">
        <h2 className="text-center m-5 mb-0 text-2xl">
          {todoLabels[page - 1]}
        </h2>
        <div className="w-full flex justify-center">
          {/* MAPPING THROUGH TRAINERS HERE */}

          {(() => {
            switch (page) {
              case 1:
                return (
                  <div className="flex flex-wrap">
                    <TrainerCardSmall
                      displayContactIcons={false}
                      setChoosedTrainer={handleTrainerSelect}
                      choosedTrainer={choosedTrainer}
                      name="Ben"
                      image={
                        <img
                          className="s object-cover w-full h-full "
                          src="../../src/assets/images/bubu1.png"
                          alt="Sofie"
                        />
                      }
                    />
                    <TrainerCardSmall
                      displayContactIcons={false}
                      setChoosedTrainer={handleTrainerSelect}
                      choosedTrainer={choosedTrainer}
                      name="Sofie"
                      image={
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="../../src/assets/images/sofie1.png"
                          alt="Sofie"
                        />
                      }
                      delay={0.2}
                    />
                    <TrainerCardSmall
                      displayContactIcons={false}
                      setChoosedTrainer={handleTrainerSelect}
                      choosedTrainer={choosedTrainer}
                      name="John"
                      image={
                        <img
                          className="object-cover w-full h-full"
                          src="../../src/assets/images/john1.png"
                          alt="John"
                        />
                      }
                      delay={0.4}
                    />
                  </div>
                );
              //   default:
              //     return null;
              case 2:
                return (
                  <ReactCalendar
                    handleTimeChange={handleTimeChange}
                    time={time}
                    handleDateChange={handleDateChange}
                    date={date}
                    choosedTrainer={choosedTrainer}
                    image={
                      <img
                        className="object-cover w-[70px] h-[70px] rounded-full"
                        src="../../src/assets/images/bubu1.png"
                        alt=""
                      />
                    }
                  />
                );
              case 3:
                return (
                  <Confirm trainer={choosedTrainer} date={date} time={time} />
                );
            }
          })()}
        </div>
        <div className="absolute w-full flex items-center bottom-0">
          <BottomNavigation
            handleClick={handleNavigationClick}
            visible={choosedTrainer !== ""}
            next={{
              text: "Next",
            }}
            previous={page > 1 ? { text: "Previous" } : undefined}
          />
        </div>
      </div>
    </div>
  );
}
