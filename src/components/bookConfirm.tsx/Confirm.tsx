//Framer
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
//MUI Icons

//Packages
import dayjs from "dayjs";
//Components
import LoginModal from "../modals/LoginModal";
//Types
import { TrainerType } from "../../types/TrainerType";
//Utils
import { LOCAL_URL } from "../../utils/urls";
//Redux
import { useAppSelector } from "../../redux/hooks";

type Props = {
  trainer: TrainerType;
  date: Date | null;
  time: string;
};

export default function Confirm({ trainer, date, time }: Props) {
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const handleCloseOnSuccessfulLogin = () => {
    setOpenLoginModal(false);
  };

  return (
    <div className="w-full">
      <LoginModal
        open={openLoginModal}
        handleClose={() => {
          setOpenLoginModal(false);
        }}
      />
      <h2 className="m-4 mb-1 text-2xl font-semibold text-center">Details</h2>
      <div //DETAILS CONTAINER
        className="bg-slate-200 p-8 flex flex-col items-center justify-center"
      >
        <div className="ml-5">
          <p>
            <span className="font-normal font-nunito">Trainer:</span>{" "}
            {trainer.firstname}
          </p>
          <p>
            <span className="font-normal font-nunito">Date:</span>{" "}
            {dayjs(date).format("YYYY.MM.DD")}
          </p>
          <p>
            <span className="font-normal font-nunito">Time:</span> {time}
          </p>
        </div>
      </div>
      {/* LOGIN SECTION*/}
      {isLoggedIn ? (
        <motion.div
          animate={{
            opacity: [0, 1],
            x: [100, 0],
            transition: { duration: 0.2 },
          }}
          className="mt-2"
        >
          <div className="flex flex-col justify-center items-center">
            <h2>Your data</h2>
            <div>Your data comes here</div>
          </div>
        </motion.div>
      ) : (
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
                  setOpenLoginModal(true);
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
      )}
    </div>
  );
}
