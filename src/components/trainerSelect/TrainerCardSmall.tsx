//Framer
import { motion } from "framer-motion";
//Mui Icons
import { CheckCircleIcon, CheckIcon } from "../../utils/icons/muiIcons";
//Types
import { TrainerType } from "../../types/TrainerType";

type TrainerProps = {
  name: string;
  delay?: number;
  image: React.ReactNode;
  setChoosedTrainer: (name: string) => void;
  choosedTrainer?: TrainerType;
  displayContactIcons?: boolean;
};

function TrainerCardSmall({
  name,
  delay = 0,
  image,
  setChoosedTrainer,
  choosedTrainer,
  displayContactIcons = true,
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
        choosedTrainer?.firstname === name
          ? "cursor-pointer m-2 flex flex-col justify-between rounded-xl  bg-[#32ff2b6c] bg-clip-border text-black shadow-md w-[200px] h-[250px]"
          : "cursor-pointer m-2 flex flex-col justify-between rounded-lg  bg-darkgray  text-offwhite shadow-md w-[200px] h-[250px]"
      }
    >
      <div className="flex  items-center justify-end">
        {choosedTrainer?.firstname === name ? (
          <CheckCircleIcon
            sx={{
              m: "4px",
              color: "#6aed29", // Green color for the circle
              backgroundColor: "white", // White background for the check icon
              borderRadius: "50%", // Make the background a circle
              display: "inline-block", // Ensure the container only takes the space needed Adjust padding as needed
            }}
          />
        ) : (
          <CheckCircleIcon sx={{ color: "transparent", fontSize: "32px" }} />
        )}
      </div>
      <div className="flex justify-center">
        <div className="relative mx-4 mt-4 h-[130px] w-[130px] overflow-hidden rounded-full bg-white bg-clip-border  shadow-lg">
          {image}
        </div>
      </div>
      <div className="text-center mb-2">
        <h4 className="mb-1 block font-sans text-xl font-semibold leading-snug tracking-normal  antialiased">
          {name}
        </h4>
        <p className="block text-pink-600 font-sans text-sm font-normal leading-relaxed text-transparent antialiased">
          Personal Trainer
        </p>
      </div>
      {displayContactIcons ? (
        <div className="flex justify-center gap-5">
          <a
            href="#facebook"
            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      ) : null}
    </motion.div>
  );
}

export default TrainerCardSmall;
