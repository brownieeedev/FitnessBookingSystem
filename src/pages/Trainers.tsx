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
      <h2 className="text-3xl font-semibold text-black text-center m-4">
        Our Trainers
      </h2>
      <div className="flex">
        {trainers
          ? trainers.map((trainer, index) => (
              <TailwindCard
                key={index}
                profilePicture={trainer.profilePicture}
                firstname={trainer.firstname}
                trainingTypes={trainer.trainingTypes}
                links={trainer.links}
              />
            ))
          : null}
      </div>
    </>
  );
}
