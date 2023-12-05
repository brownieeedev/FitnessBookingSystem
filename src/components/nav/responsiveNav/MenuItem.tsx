import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  index: number;
  text: string;
  icon: React.ReactNode;
  toggle: () => void;
};

export const MenuItem = ({ toggle, text, icon, index }: Props) => {
  const navigate = useNavigate();
  return (
    <motion.li
      className="nav-li select-none"
      onClick={() => {
        switch (text) {
          case "About me":
            toggle();
            navigate("/");
            break;
          case "Projects":
            toggle();

            navigate("/projects");
            break;
          case "Resume":
            toggle();

            navigate("/resume");
            break;
          case "Get in touch":
            toggle();

            navigate("/getintouch");
            break;
          default:
            toggle();
            navigate("/");
            break;
        }
      }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={
          index === 0
            ? "w-[40px] h-[40px] flex justify-center items-center rounded-full mr-5 border-[2px] border-[#FF008C]"
            : index === 1
            ? "w-[40px] h-[40px] flex justify-center items-center rounded-full mr-5 border-[2px] border-[#D309E1]"
            : index == 2
            ? "w-[40px] h-[40px] flex justify-center items-center rounded-full mr-5 border-[2px] border-[#7700FF]"
            : "w-[40px] h-[40px] flex justify-center items-center rounded-full mr-5 border-[2px] border-[#4400FF]"
        }
      >
        {icon}
      </div>
      <div
        className={
          index === 0
            ? "rounded-md w-[200px]  p-2 flex-1 border-[2px] border-[#FF008C]"
            : index === 1
            ? "rounded-md w-[200px]  p-2 flex-1 border-[2px] border-[#D309E1]"
            : index == 2
            ? "rounded-md w-[200px]  p-2 flex-1 border-[2px] border-[#7700FF]"
            : "rounded-md w-[200px]  p-2 flex-1 border-[2px] border-[#4400FF]"
        }
      >
        <p>{text}</p>
      </div>
    </motion.li>
  );
};
