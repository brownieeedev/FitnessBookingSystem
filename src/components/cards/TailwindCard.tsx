import { ShortTrainerType } from "../../types/TrainerType";

//Framer
import { motion } from "framer-motion";

function TailwindCard({
  firstname,
  trainingTypes,
  links,
  delay,
  profilePicture,
}: ShortTrainerType) {
  return (
    <motion.div
      animate={{
        y: [-50, 0],
        opacity: [0, 1],
        transition: { duration: 0.5, delay: delay },
      }}
      className="relative cursor-pointer hover:shadow-lg hover:scale-[1.01] flex h-auto max-h-[520px] w-[340px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div className="relative mx-4 mt-4 min-w-[248px] min-h-[248px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <img
          className="object-cover w-full h-full"
          src={profilePicture}
          alt="profile-picture"
        />
      </div>
      <div className="p-3 text-center">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {firstname}
        </h4>
        <div className="flex justify-center gap-4">
          {/* map links here */}
          <a
            href="#facebook"
            className="block  bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
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
        <div className="pb-1 border-y w-[75%] mx-auto border-gray-200">
          {trainingTypes.map((trainingType, index) => (
            <p
              key={index}
              className="block bg-gradient-to-b from-blue-500 to-blue-900 font-normal bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased"
            >
              {trainingType}
            </p>
          ))}
        </div>
      </div>
      <div className="m-2 mt-0 flex justify-center">
        <button className="bg-darkgray hover:bg-black text-white p-3 px-7 rounded-full ">
          More about me
        </button>
      </div>
    </motion.div>
  );
}

export default TailwindCard;
