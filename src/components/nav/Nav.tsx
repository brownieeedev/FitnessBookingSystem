import { useNavigate } from "react-router-dom";

//Framer
import { motion } from "framer-motion";

//Components
// import ContactIcons from "../contacticons/ContactIcons";
import { ResponsiveNavigation } from "./responsiveNav/ResponsiveNavigation";

type Tab = {
  name: string;
  navigateTo: string;
};

type Props = {
  tabs: Tab[];
  contactIcons?: React.ReactNode[];
};

export default function Nav({ tabs }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="m-6 sm:hidden">
        <ResponsiveNavigation />
      </div>
      <div className="hidden text-darkgray overflow-hidden sm:flex sm:justify-between md:items-center z-10 h-[auto] bg-transparent pb-2 mt top-0 right-0 pl-5 pr-5">
        <div //icons-container
          className="flex items-center cursor-pointer"
        >
          {/* {contactIcons?.map((icon, index) => (
            <div key={index} className="mr-1">
              {icon}
            </div>
          ))} */}
        </div>
        <div>
          <ul className="flex select-none items-center">
            {tabs.map((tab, index) => (
              <li
                className="text-[15px] font-normal cursor-pointer m-2"
                key={index}
              >
                {index === tabs.length - 1 ? (
                  <button
                    onClick={() => {
                      navigate(tab.navigateTo);
                    }}
                    className="border border-[#fff] font-inter p-3 pt-[9px] pb-[9px] rounded-full bg-white text-black hover:bg-[#ffffffe4]"
                  >
                    {tab.name}
                  </button>
                ) : (
                  <motion.div
                    className="font-inter font-normal text-darkgray"
                    whileHover={{
                      scale: 1.04,
                      transition: { duration: 0.1 },
                    }}
                    onClick={() => {
                      navigate(tab.navigateTo);
                    }}
                  >
                    {tab.name}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
