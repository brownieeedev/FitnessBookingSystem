import { useNavigate } from "react-router-dom";

//Framer
import { motion } from "framer-motion";

//Components
// import ContactIcons from "../contacticons/ContactIcons";
// import { ResponsiveNavigation } from "./responsiveNav/ResponsiveNavigation";

type Tab = {
  name: string;
  navigateTo: string;
};

type Props = {
  tabs: Tab[];
  contactIcons?: React.ReactNode[];
};

export default function Nav({ tabs, contactIcons }: Props) {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="m-6 md:hidden">
        <ResponsiveNavigation />
      </div> */}
      <div className="hidden overflow-hidden md:flex md:justify-between md:items-center z-10 h-[50px] bg-transparent relative mb-2 mt top-0 pl-5 pr-5">
        <div //icons-container
          className="flex items-center cursor-pointer"
        >
          {contactIcons?.map((icon, index) => (
            <div key={index} className="mr-1">
              {icon}
            </div>
          ))}
        </div>
        <div>
          <ul className="flex select-none items-center">
            {tabs.map((tab, index) => (
              <li className="font-kumbh text-sm cursor-pointer m-2" key={index}>
                {index === tabs.length - 1 ? (
                  <button
                    onClick={() => {
                      navigate(tab.navigateTo);
                    }}
                    className="border border-[#fff] font-poppins p-3 pt-[9px] pb-[9px] rounded-full hover:bg-white hover:text-black "
                  >
                    {tab.name}
                  </button>
                ) : (
                  <motion.div
                    className="font-poppins"
                    whileHover={{
                      scale: 1.04,
                      color: "#fff",
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
