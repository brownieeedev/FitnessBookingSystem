import { useNavigate } from "react-router-dom";
//Packages
import { twMerge } from "tailwind-merge";
//Framer
import { motion } from "framer-motion";
//MUI Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {
  center?: boolean;
  title: string;
  description: string;
  image?: React.ReactNode;
  delay?: number;
  navigateTo: string;
  buttonText?: string;
  className?: string;
};

export default function HomeCard({
  center,
  title,
  description,
  image,
  delay = 0,
  navigateTo,
  buttonText = "Lets Go",
  className,
}: Props) {
  const navigate = useNavigate();
  const containerStyle = center
    ? twMerge(
        "bg-[#ffffff53] ml-5 mr-5 mt-7 cursor-pointer text-darkgray  w-[300px] h-[450px] sm:w-[230px] sm:h-[355px]",
        className
      )
    : twMerge(
        "bg-[#ffffff53] mt-7 cursor-pointer text-darkgray w-[300px] h-[450px] sm:w-[230px] sm:h-[355px]",
        className
      );
  return (
    <motion.div
      className={containerStyle}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      animate={{
        y: [-40, 0],
        opacity: [0, 1],
        transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
      }}
    >
      <div className="h-[250px] sm:h-[190px]">{image}</div>
      <div className="h-[100px] sm:h-[100px] flex items-center ">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="font-kumbh font-bold text-[20px]">{title}</h1>
            <p className="font-kumbh text-[15px]">{description}</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          navigate(navigateTo);
        }}
        className="group bg-[#18181825] flex font-semibold justify-center items-center h-[70px] sm:h-[65px]"
      >
        <button>
          {buttonText}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2 },
            }}
            className="hidden group-hover:inline"
          >
            <ArrowForwardIcon sx={{ fontSize: "25px" }} />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}
