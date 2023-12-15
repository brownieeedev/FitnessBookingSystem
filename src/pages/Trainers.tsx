import { useState } from "react";
//Components
import TailwindCard from "../components/cards/TailwindCard";
//Framer
import { motion } from "framer-motion";
//Hooks
import { useMount } from "../hooks/useMount";
//Utils
import { axiosGet } from "../utils/axiosFetches";
import { LOCAL_URL } from "../utils/urls";
//Types
import { ShortTrainerType } from "../types/TrainerType";
export default function Trainers() {
  const [trainers, setTrainers] = useState<ShortTrainerType[]>([]);
  useMount(async () => {
    try {
      const res = await axiosGet(`${LOCAL_URL}/api/trainers/alltrainers`);
      setTrainers(res.data);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <h2 className="text-3xl font-inter font-bold text-darkgray text-center m-4">
        Our Trainers
      </h2>
      <div className="middlesm:flex-row middlesm:flex-wrap middlesm:justify-center flex flex-col items-center flex-wrap gap-3">
        {trainers
          ? trainers.map((trainer, index) => (
              <TailwindCard
                key={index}
                profilePicture={trainer.profilePicture}
                firstname={trainer.firstname}
                trainingTypes={trainer.trainingTypes}
                links={trainer.links}
                delay={index * 0.2}
              />
            ))
          : null}
      </div>
    </>
  );
}
