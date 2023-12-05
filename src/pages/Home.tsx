//Framer
import { motion } from "framer-motion";

//Components
import HomeCard from "../components/homeCard/HomeCard";
import ProjectsSummary from "../components/projectsSummary/ProjectsSummary";

function Home() {
  return (
    <div>
      <motion.h1
        animate={{
          opacity: [0.1, 1],
          y: [-20, 0],
          transition: { duration: 0.7 },
        }}
        className="text-center text-2xl text-black"
      >
        Get fitter with us.
      </motion.h1>
      <div className="select-none mt-5 max-w-[1000px] flex flex-col sm:flex-row justify-center items-center">
        <HomeCard
          title="Personal trainings"
          description="Personal trainings either online or in person."
          navigateTo="/trainings"
          image={
            <img
              className="object-cover h-[100%] w-[100%]"
              src="./src/assets/images/coach1.jpg"
              alt="traininglondon"
            />
          }
        />
        <HomeCard
          delay={0.2}
          center={true}
          title="Training videos"
          description="Get access to training guides weekly."
          navigateTo="/videos"
          image={
            <img
              className="object-cover h-[100%] w-[100%]"
              src="./src/assets/images/shoes1.jpg"
              alt="traininglondon"
            />
          }
        />
        <HomeCard
          delay={0.4}
          title="Group training"
          description="Take part in one of our many group trainings."
          navigateTo="/trainings"
          image={
            <img
              className="object-cover h-[100%] w-[100%]"
              src="./src/assets/images/lifting1.jpg"
              alt="traininglondon"
            />
          }
        />
      </div>
      <motion.h1
        animate={{
          opacity: [0.1, 1],
          y: [-20, 0],
          transition: { duration: 0.7 },
        }}
        className="text-center m-8 mt-[40px] text-2xl text-black"
      >
        Our experience
      </motion.h1>
      <div className="mt-10">
        <ProjectsSummary />
      </div>
    </div>
  );
}

export default Home;
