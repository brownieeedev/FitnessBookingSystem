//Framer
import { motion } from "framer-motion";
import { useState } from "react";
//MUI Icons
import {
  AccessTimeFilledIcon,
  CalendarMonthIcon,
} from "../../utils/icons/muiIcons";
//React Icons
import { IoIosFitness, IoPersonSharp } from "../../utils/icons/reactIcons";
//Packages
import dayjs from "dayjs";
//Components
import LoginModal from "../modals/LoginModal";
//Types
import { TrainerType } from "../../types/TrainerType";
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
        className="bg-slate-200 text-lg p-8 flex flex-col items-center justify-center"
      >
        <div className="ml-5">
          <div className="ml-[3px] flex items-center gap-1">
            <IoPersonSharp />
            <p>
              <span className="font-normal font-nunito">Trainer:</span>{" "}
              {trainer.firstname}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <CalendarMonthIcon />
            <p>
              <span className="font-normal font-nunito">Date:</span>{" "}
              {dayjs(date).format("YYYY.MM.DD")}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <AccessTimeFilledIcon />
            <p>
              <span className="font-normal font-nunito">Time:</span> {time}
            </p>
          </div>
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
          className=" bg-neutral-100 h-full flex justify-center items-center flex-col"
        >
          <h2 className="text-center font-semibold text-2xl">
            Do you have an account?{" "}
          </h2>
          <div className="flex flex-col justify-center items-center lg:min-w-[300px]">
            <div className="mt-5 w-full">
              <button
                onClick={() => {
                  setOpenLoginModal(true);
                }}
                className="border rounded-md border-black bg-amber-300 w-full p-7 py-3 hover:text-white hover:bg-darkgray hover:opacity-90"
              >
                Login
              </button>
            </div>
            <div // GOOGLE LOGIN BUTTON
              className="mt-1 mb-0 w-full"
            >
              <button className="w-full flex items-center justify-center p-7 py-3 border rounded-md font-medium border-black relative hover:text-white hover:bg-darkgray">
                <span className="">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill="#EA4335 "
                      d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                    />
                  </svg>
                </span>
                <span>Sign in with Google</span>
              </button>
            </div>

            <div className="m-4">
              <p className="text-black  font-normal text-sm">
                Dont have an account?
              </p>
              <p className="font-normal cursor-pointer text-[17px] text-blue hover:opacity-80">
                Create an account
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
