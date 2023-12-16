//Framer
import { motion } from "framer-motion";
//Components
import TrainerSelect from "../components/trainerSelect/TrainerSelect";

export default function PersonalOnline() {
  return (
    <div className="text-darkgray text-lg">
      <motion.h2
        animate={{ opacity: [0, 1], transition: { duration: 0.6 } }}
        className="text-3xl font-inter font-bold text-darkgray text-center m-4"
      >
        Book an online training EASY
      </motion.h2>{" "}
      <p className="text-center">
        If you book a training in the morning you might get a trainer for the
        evening!
      </p>
      <div className="">
        <div
          className="mt-8 flex flex-col items-center justify-center" //CHOOSE TRAINER
        >
          <TrainerSelect />
        </div>
      </div>
    </div>
  );
}
