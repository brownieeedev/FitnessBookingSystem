import { useEffect, useState } from "react";
//Components
import BottomNavigation from "../bottomNavigation/BottomNavigation";
import VerticalStepper from "../verticalStepper/VerticalStepper";
import Confirm from "../bookConfirm.tsx/Confirm";
import TrainerCardSmall from "./TrainerCardSmall";
import CalendarPage from "../calendar/CalendarPage";
//Utils
import { useMount } from "../../hooks/useMount";
import { toastError } from "../../utils/toasts";
import { axiosGet, axiosPost } from "../../utils/axiosFetches";
import { LOCAL_URL } from "../../utils/urls";
import { jwtInterceptor } from "../../utils/jwtInterceptor";
//Redux
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  allowNext,
  allowPrevious,
  disableNext,
  disablePrevious,
} from "../../redux/slices/bottomNavigationSlice";
//Types
import { TrainerType } from "../../types/TrainerType";
//Variables
const numberOfSteps = 3;
const todoLabels: string[] = [
  "Choose a trainer",
  "Choose a date",
  "Confirmation",
];

export default function TrainerSelect() {
  //Redux states
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  //States
  const [choosedTrainer, setChoosedTrainer] = useState<TrainerType>();
  const [page, setPage] = useState<number>(1);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");

  const [trainers, setTrainers] = useState<TrainerType[]>([]);

  useMount(async () => {
    dispatch(disablePrevious());
    dispatch(disableNext());
    try {
      const res = await axiosGet(`${LOCAL_URL}/api/trainers/alltrainers`);
      setTrainers(res.data);
    } catch (err: any) {
      if (err.response.message) toastError(err.response.message);
      toastError("Something went wrong!");
      console.error(err);
    }
  });

  // console.log(page);
  // console.log(choosedTrainer);
  // console.log(date);
  // console.log(time);

  const handleTrainerSelect = (name: string): void => {
    const choosedTrainer = trainers.find(
      (trainer) => trainer.firstname === name
    );
    setChoosedTrainer(choosedTrainer);
    setTime("");
    setDate(null);
  };

  const handleConfirm = async () => {
    if (!isLoggedIn || !date || !time || !choosedTrainer) {
      toastError("Something went wrong!");
      return;
    }
    // dispatch(disablePrevious());
    // dispatch(disableNext());
    jwtInterceptor();
    const res = await axiosPost(`${LOCAL_URL}/api/booking/book`, {
      trainer: choosedTrainer._id,
      date,
      time,
      trainingType: "online",
    });
    console.log(res);
  };

  const handleNavigationClick = (direction: string): void => {
    if (direction === "next") {
      if (page === numberOfSteps) {
        handleConfirm();
        return;
      }
      setPage((prev) => prev + 1);
    } else if (direction === "previous") {
      if (page === 1) return;
      setPage((prev) => prev - 1);
    }
  };

  const handleTimeChange = (time: string): void => {
    setTime(time);
  };

  const handleDateChange = (date: Date): void => {
    setDate(date);
  };

  //Handling bottom navigation
  useEffect(() => {
    if (page === 1) {
      dispatch(disablePrevious());
      if (choosedTrainer?.firstname !== "") {
        dispatch(allowNext());
      }
    } else if (page === 2) {
      dispatch(allowPrevious());
      dispatch(disableNext());
      if (date !== null && time !== "") {
        dispatch(allowNext());
      }
    } else if (page === 3) {
      dispatch(disableNext());
      if (isLoggedIn) {
        dispatch(allowNext());
      }
    }
  }, [page, choosedTrainer, date, time, isLoggedIn]);

  return (
    <div className="select-none bg-slate-50 font-inter font-bold w-[85%] flex border bg-transparent min-h-[800px]  max-w-[1200px] ">
      <div //Sidepanel
        className="w-[35%] h-auto flex items-center justify-center left-0 bg-darkgray"
      >
        <VerticalStepper
          currentStep={page}
          steps={[
            {
              num: 1,
              title: "Choose a trainer",
            },
            {
              num: 2,
              title: "Choose a date",
            },
            {
              num: 3,
              title: "Confirm",
            },
          ]}
        />
      </div>
      <div className="relative  bg-slate-100 flex flex-col w-full">
        <h2 className="text-center m-5 mb-0 text-2xl">
          {todoLabels[page - 1]}
        </h2>
        <div className="w-full flex justify-center">
          {/* MAPPING THROUGH TRAINERS HERE */}
          {(() => {
            switch (page) {
              case 1:
                return trainers.map((trainer, index) => (
                  <div key={index} className="flex flex-wrap">
                    <TrainerCardSmall
                      displayContactIcons={false}
                      setChoosedTrainer={handleTrainerSelect}
                      choosedTrainer={choosedTrainer}
                      name={trainer.firstname}
                      delay={index * 0.2}
                      image={
                        <img
                          className="s object-cover w-full h-full "
                          src={trainer.profilePicture}
                          alt="trainerpicture"
                        />
                      }
                    />
                  </div>
                ));
              case 2:
                return (
                  <CalendarPage
                    handleTimeChange={handleTimeChange}
                    choosedTime={time}
                    handleDateChange={handleDateChange}
                    date={date}
                    choosedTrainer={choosedTrainer!}
                    image={choosedTrainer?.profilePicture!}
                  />
                );
              case 3:
                return (
                  <Confirm trainer={choosedTrainer!} date={date} time={time} />
                );
            }
          })()}
        </div>
        <div className="absolute w-full flex items-center bottom-0">
          <BottomNavigation
            handleClick={handleNavigationClick}
            nextBtn={{
              text: page === 3 && isLoggedIn ? "Confirm" : "Next",
            }}
            previousBtn={{ text: "Back" }}
          />
        </div>
      </div>
    </div>
  );
}
