import { useState } from "react";

//Components
import TrainerCard from "./TrainerCard";
import BottomNavigation from "../bottomNavigation/BottomNavigation";
import VerticalStepper from "../verticalStepper/VerticalStepper";

export default function TrainerSelect() {
  const [choosedTrainer, setChoosedTrainer] = useState("");
  const [page, setPage] = useState<1 | 2 | 3>(1);
  console.log(choosedTrainer);

  const handleTrainerSelect = (name: string) => {
    setChoosedTrainer(name);
  };

  return (
    <div className="select-none font-inter font-bold w-[85%] flex flex-row justify-between border bg-transparent max-w-[800px] h-[500px]">
      <div //Sidepanel
        className="w-[35%] flex items-center justify-center left-0 bg-darkgray h-[100%]"
      >
        <VerticalStepper
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
      <div className="flex flex-col">
        <div className="w-full flex justify-center">
          {/* MAPPING THROUGH TRAINERS HERE */}
          <div className="flex flex-wrap">
            <TrainerCard
              setChoosedTrainer={handleTrainerSelect}
              choosedTrainer={choosedTrainer}
              name="Bubu"
              image={
                <img
                  className="s object-cover w-full h-full rounded-full"
                  src="../../src/assets/images/bubu1.png"
                  alt="Sofie"
                />
              }
            />
            <TrainerCard
              setChoosedTrainer={handleTrainerSelect}
              choosedTrainer={choosedTrainer}
              name="Sofie"
              image={
                <img
                  className="pr-1 object-cover w-full h-full rounded-full"
                  src="../../src/assets/images/sofie1.png"
                  alt="Sofie"
                />
              }
              delay={0.2}
            />
            <TrainerCard
              setChoosedTrainer={handleTrainerSelect}
              choosedTrainer={choosedTrainer}
              name="John"
              image={
                <img
                  className="pr-1 object-cover w-full h-full rounded-full"
                  src="../../src/assets/images/john1.png"
                  alt="John"
                />
              }
              delay={0.4}
            />
          </div>
        </div>
        <BottomNavigation
          visible={choosedTrainer !== ""}
          next={{
            text: "Next",
          }}
        />
      </div>
    </div>
  );
}
