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
  delay = 0,
}: SummaryCardProps) => {
  return (
    <motion.div
      animate={{
        scale: [0.5, 1],
        y: [-30, 0],
        opacity: [0, 1],

        transition: { duration: 0.5, delay: delay },
      }}
      className={twMerge(
        "relative m-3 p-6 flex flex-col items-center overflow-hidden justify-center font-geologica font-extralight  text-white text-xl  bg-gradient-to-br from-teal-400 to-green-400 rounded-[4px] w-[250px] min-h-[130px]",
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

export default function TrainerSummaryPanels() {
  return (
    <div className="flex flex-col mr-auto md:flex-row">
      <SummaryCard name="Personal Trainings" numValue={100} />
      <SummaryCard
        className="bg-gradient-to-r from-fuchsia-600 to-purple-500 "
        name="Customers"
        numValue={340}
        delay={0.1}
      />
      <SummaryCard
        className="bg-gradient-to-br from-blue-600 to-blue-400 "
        name="Return Guests"
        numValue={33}
        delay={0.2}
      />
      <SummaryCard
        className="bg-gradient-to-br from-yellow-500 to-rose-400  "
        name="Videos posted"
        numValue={1}
        delay={0.3}
      />
    </div>
  );
}
