import { useNavigate } from "react-router-dom";
//MUI Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//Framer
import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  navigateTo?: string;
};

type Props = {
  next?: ButtonProps;
  previous?: ButtonProps;
  visible?: boolean;
  handleClick: (direction: string) => void;
};

export default function BottomNavigation({
  next,
  previous,
  visible = false,
  handleClick,
}: Props) {
  return (
    <>
      {visible ? (
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [20, 0],
            transition: { duration: 0.2 },
          }} //Bottom navigation for the mulitstep form
          className="bottom-0 w-full h-[70px] bg-slate-50"
        >
          <div className="max-w-[700px] m-auto mt-3 mb-0 flex justify-between items-center text-gray-300 ">
            {previous ? (
              <button
                onClick={() => {
                  handleClick("previous");
                }}
                className="flex items-center font-inter bg-blue-500 text-white p-4 pt-2 pb-2 rounded-full ml-3 hover:bg-opacity-80  font-semibold tracking-wide mr-auto text-lg"
              >
                <ArrowBackIcon /> {previous?.text}
              </button>
            ) : null}
            {next ? (
              <button
                onClick={() => {
                  handleClick("next");
                }}
                className="flex items-center  font-inter bg-blue-500 text-white p-4 pt-2 pb-2 rounded-full mr-3 hover:bg-opacity-80  font-semibold tracking-wide ml-auto text-lg"
              >
                {next?.text} <ArrowForwardIcon />
              </button>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
