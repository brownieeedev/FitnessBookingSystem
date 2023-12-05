//Framer
import { motion } from "framer-motion";

//Repetitive Styles
const summaryContainerStyles =
  "h-[140px] rounded-md w-1/3 m-[1px] m-1 extrasm:m-1";

const summaryStyles =
  "w-[180px] h-[140px] flex justify-center relative  rounded-md";

const labelStyles = "font-inter tracking-wide text-md text-darkgray font-bold";

const coloredLabel = "font-inter text-3xl font-bold";

type SpanProps = {
  color: string;
};

const Span = ({ color }: SpanProps) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.7, delay: 1 },
      }}
      className={`absolute h-[1px] w-full m-auto bg-gradient-to-r from-transparent ${color} to-transparent`}
    />
  );
};

function ProjectsSummary() {
  return (
    <div //summary
      className="flex flex-col justify-center items-center flex-wrap extrasm:flex-row"
    >
      <div className={summaryContainerStyles}>
        <div className={`${summaryStyles} extrasm:float-right`}>
          <Span color="via-purple-500" />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
            className="flex flex-col items-center justify-center"
          >
            <p className={`${coloredLabel} text-purple-500`}>300+</p>
            <p className={labelStyles}>Clients</p>
          </motion.div>
        </div>
      </div>
      <div className={summaryContainerStyles}>
        <div className={`${summaryStyles} extrasm:float-left`}>
          <Span color="via-[#62b544]" />
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            className="flex flex-col items-center justify-center"
          >
            <p className={`${coloredLabel} text-[#62b544]`}>10+</p>
            <p className={labelStyles}>Training types</p>
          </motion.div>
        </div>
      </div>
      <div className={summaryContainerStyles}>
        <div className={`${summaryStyles} extrasm:float-right`}>
          <Span color="via-sky-500" />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.7 },
            }}
            className="flex flex-col items-center justify-center"
          >
            <p className={`${coloredLabel} text-sky-500`}>40+</p>
            <p className={labelStyles}>Combined experience</p>
          </motion.div>
        </div>
      </div>
      <div className={summaryContainerStyles}>
        <div className={`${summaryStyles} extrasm:float-left`}>
          <Span color="via-orange-400" />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="flex flex-col items-center justify-center"
          >
            <p className={`${coloredLabel} text-orange-400`}>780</p>
            <p className={labelStyles}>Spent hours</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSummary;
