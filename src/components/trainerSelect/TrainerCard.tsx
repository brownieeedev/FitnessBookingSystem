//Framer
import { motion } from "framer-motion";

type TrainerProps = {
  name: string;
  delay?: number;
  image: React.ReactNode;
  setChoosedTrainer: (name: string) => void;
  choosedTrainer?: string;
};

export default function TrainerCard({
  name,
  delay = 0,
  image,
  setChoosedTrainer,
  choosedTrainer,
}: TrainerProps) {
  return (
    <motion.div
      onClick={() => {
        setChoosedTrainer(name);
      }}
      animate={{
        opacity: [0, 1],
        x: [50, 0],
        transition: { duration: 0.5, delay: delay },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
      className={
        choosedTrainer === name
          ? "rounded-sm cursor-pointer flex flex-col justify-center w-[170px] h-[200px] items-center m-2 bg-green-200"
          : "rounded-sm cursor-pointer flex flex-col justify-center w-[170px] h-[200px] items-center m-2 bg-slate-300"
      }
    >
      <div className="w-[100px] h-[100px] rounded-full border-[2px] border-black">
        {image}
      </div>
      <div>
        <p>{name}</p>
      </div>
    </motion.div>
  );
}
