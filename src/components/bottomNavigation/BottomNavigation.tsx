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
};

export default function BottomNavigation({
  next,
  previous,
  visible = false,
}: Props) {
  const navigate = useNavigate();
  return (
    <>
      {visible ? (
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [20, 0],
            transition: { duration: 0.2 },
          }} //Bottom navigation for the mulitstep form
          className="bottom-0 w-full h-[100px] border bg-gray-200"
        >
          <div className="max-w-[700px] m-auto mt-3 mb-0 flex justify-between items-center text-gray-300 ">
            {previous ? (
              <button
                onClick={() => {
                  // navigate(previous?.navigateTo || "/", {
                  //   state: { key: "bottom" },
                  // });
                }}
                className="font-inter font-semibold tracking-wide mr-auto text-lg hover:text-white"
              >
                <ArrowBackIcon /> {previous?.text}
              </button>
            ) : null}
            {next ? (
              <button
                onClick={() => {
                  // navigate(next?.navigateTo || "/", {
                  //   state: { key: "bottom" },
                  // });
                }}
                className="font-inter bg-blue-400 text-white p-4 pt-2 pb-2 rounded-full mr-3 hover:bg-opacity-80  font-semibold tracking-wide ml-auto text-lg"
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
