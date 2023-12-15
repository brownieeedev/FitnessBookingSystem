//MUI Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//Framer
import { motion } from "framer-motion";
type Steps = {
  num: number;
  title: string;
};

type Props = {
  steps: Steps[];
  currentStep: number;
};

export default function VerticalStepper({ steps, currentStep = 1 }: Props) {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div
          key={index}
          className="mt-1 flex flex-col items-center justify-center"
        >
          {index + 1 < currentStep ? (
            <motion.div
              animate={{
                opacity: [0, 1],
                y: [3, 0],
                transition: { duration: 0.2, delay: 0.1 },
              }}
              className="w-[35px] h-[35px] bg-[#55b93c] flex justify-center items-center   rounded-full"
            >
              <CheckCircleOutlineIcon
                sx={{ color: "#fff", fontSize: "28px" }}
              />
            </motion.div>
          ) : (
            <div className="w-[35px] h-[35px] bg-gray-100 flex justify-center items-center rounded-full">
              <p className="pl-[2px]">{`${step.num}.`}</p>
            </div>
          )}
          <p className="font-inter text-sm mt-[2px] text-white font-normal">
            {step.title}
          </p>
          {index === steps.length - 1 ? null : index + 1 < currentStep ? (
            <motion.div
              animate={{
                opacity: [0, 1],
                y: [3, 0],
                transition: { duration: 0.2, delay: 0.1 },
              }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#76f0603d] w-[1px] h-[60px]" />
              <KeyboardArrowDownIcon sx={{ color: "#55b93c" }} />
            </motion.div>
          ) : (
            <div className="bg-gray-600 w-[1px] h-[60px]" />
          )}
        </div>
      ))}
    </div>
  );
}
