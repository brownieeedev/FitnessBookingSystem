import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type SummaryCardProps = {
  name: string;
  numValue: number;
  className?: string;
  delay?: number;
};

const SummaryCard = ({
  name,
  numValue,
  className,
}: // delay = 0,
SummaryCardProps) => {
  return (
    <motion.div
      animate={{
        scale: [0.9, 1],
        y: [-3, 0],
        opacity: [0, 1],

        transition: { duration: 0.2 },
      }}
      className={twMerge(
        "relative  p-6 flex flex-col items-center overflow-hidden justify-center font-geologica font-extralight  text-white text-xl  bg-gradient-to-br from-teal-400 to-green-400 rounded-[4px] w-[250px] min-h-[130px] lg:w-[342px] lg:text-2xl lg:h-[155px]",
        className
      )}
    >
      <h2 className="font-bold text-center text-3xl tracking-wide">
        {numValue}
      </h2>
      <h2 className="text-center">{name}</h2>
      <div className="absolute -top-8 -left-10 w-[110px] h-[110px] bg-[#ffffff11] rounded-full" />
      <div className="absolute -bottom-7 -right-7 w-[100px] h-[100px] bg-[#ffffff13] rounded-full" />
    </motion.div>
  );
};

type PanelData = {
  num: number;
  text: string;
};

type TrainerSummaryPanelsProps = {
  panelValues: [PanelData, PanelData, PanelData, PanelData];
};

export default function TrainerSummaryPanels({
  panelValues,
}: TrainerSummaryPanelsProps) {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <SummaryCard name={panelValues[0].text} numValue={panelValues[0].num} />
      <SummaryCard
        className="bg-gradient-to-r from-fuchsia-600 to-purple-500 "
        name={panelValues[1].text}
        numValue={panelValues[1].num}
        // delay={0.1}
      />
      <SummaryCard
        className="bg-gradient-to-br from-blue-600 to-blue-400 "
        name={panelValues[2].text}
        numValue={panelValues[2].num}
        // delay={0.2}
      />
      <SummaryCard
        className="bg-gradient-to-br from-yellow-500 to-rose-400  "
        name={panelValues[3].text}
        numValue={panelValues[3].num}
        // delay={0.3}
      />
    </div>
  );
}
