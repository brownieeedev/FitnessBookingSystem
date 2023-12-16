import { useNavigate } from "react-router-dom";
//Framer
import { motion } from "framer-motion";

type ChooseCardsProps = {
  delay?: number;
};

function ChooseCards({ delay }: ChooseCardsProps) {
  const navigate = useNavigate();
  return (
    <section className="pt-3 lg:pt-[10px] pb-10 lg:pb-20 bg-transparent">
      <div className="container mx-auto max-w-[500px] md:max-w-[90%]">
        <div className="flex flex-wrap  justify-center -mx-4">
          <motion.div
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            animate={{
              y: [-40, 0],
              opacity: [0, 1],
              transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
            }}
            onClick={() => {
              navigate("/trainings/online");
            }}
            className="cursor-pointer w-full md:w-1/2 xl:w-1/3 px-4"
          >
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="./src/assets/images/home2comp.jpg"
                alt="image"
                className="w-full"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Online training from the comfort of your home
                  </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  Book a training session with one of our professional trainers
                  and get in a quick workout from the comfort of your home.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     
                     transition
                     bg-blue
                     text-white
                     hover:opacity-75
                     "
                >
                  Online
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            animate={{
              y: [-40, 0],
              opacity: [0, 1],
              transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
            }}
            className="cursor-pointer w-full md:w-1/2 xl:w-1/3 px-4"
          >
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src="./src/assets/images/ropes1comp.jpg"
                alt="image"
                className="w-full"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Train in person with one of our trainers
                  </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  Book a training for an in person session. Currently we are
                  providing or in person trainings in London.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     transition
                     bg-blue
                     text-white
                     hover:opacity-75
                     "
                >
                  In person
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ChooseCards;
