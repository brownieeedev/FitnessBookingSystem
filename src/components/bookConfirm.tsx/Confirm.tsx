//Framer
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

//MUI Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

//Components
import LoginForm from "../forms/LoginForm";

type Props = {
  trainer: string;
  date: Date | null;
  time: string;
};

export default function Confirm({ trainer, date, time }: Props) {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [isLoggedInNow, setIsLoggedInNow] = useState<boolean>(false);

  const handleCloseOnSuccessfulLogin = () => {
    setOpenLogin(false);
    setIsLoggedInNow(true);
  };

  return (
    <div className="w-full">
      <h2 className="m-4 text-2xl text-center">Confirmation details</h2>
      <div className="bg-slate-100 p-8 flex flex-col items-center justify-center">
        <div className="ml-5">
          <p>
            <span className="font-normal font-nunito">Trainer:</span> {trainer}
          </p>
          <p>
            <span className="font-normal font-nunito">Date:</span>{" "}
            {date?.toLocaleDateString()}
          </p>
          <p>
            <span className="font-normal font-nunito">Time:</span> {time}
          </p>
        </div>
      </div>
      {/* login section */}
      {openLogin ? (
        <motion.div
          animate={{
            opacity: [0, 1],
            x: [100, 0],
            transition: { duration: 0.2 },
          }}
          className="mt-2"
        >
          <div className="flex flex-col justify-center items-center">
            <LoginForm handleCloseLogin={handleCloseOnSuccessfulLogin} />
          </div>
        </motion.div>
      ) : isLoggedInNow ? (
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.2 },
          }}
          className="mt-7 flex flex-col items-center"
        >
          <p className="text-center text-2xl font-normal text-[#47af3e]">
            Successfully logged in!
          </p>
          <CheckCircleOutlineIcon
            sx={{ color: "#47af3e", fontSize: "100px" }}
          />
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              y: -100,
              transition: { duration: 1 },
            }}
            className="m-4"
          >
            <h2 className="text-center font-semibold text-xl">
              Do you have an account?{" "}
            </h2>
            <div className="flex flex-col justify-center items-center">
              <div className="mt-5">
                <button
                  onClick={() => {
                    setOpenLogin(true);
                  }}
                  className="border border-gray-300 bg-amber-300 p-7 pt-2 pb-2 rounded-full"
                >
                  Login
                </button>
              </div>
              <div className="m-4">
                <p className="font-normal text-sm text-blue-600">
                  Dont have an account?
                </p>
                <p className="font-normal cursor-pointer text-[17px] hover:font-semibold">
                  Create an account
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
