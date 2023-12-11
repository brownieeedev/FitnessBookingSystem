//MUI Icons
import {
  DashboardCustomizeIcon,
  AccessTimeFilledIcon,
  VideoCallIcon,
  SettingsIcon,
} from "../../utils/icons/muiIcons";
//Framer
import { motion } from "framer-motion";

type SideNavButtonProps = {
  text: string;
  icon: React.ReactNode;
};

type SidePanelProps = {
  changePage: (pageNum: number) => void;
  trainer: {
    imgSrc: string;
    name: string;
    title?: string;
  };
};

const sideNavButtons: SideNavButtonProps[] = [
  { text: "Dashboard", icon: <DashboardCustomizeIcon /> },
  { text: "Availability", icon: <AccessTimeFilledIcon /> },
  { text: "Upload Video", icon: <VideoCallIcon /> },
];

export default function SidePanel({
  changePage,
  trainer: { imgSrc, name: trainer, title = "Personal Trainer" },
}: SidePanelProps) {
  return (
    <div className="relative bg-zinc-800 select-none h-full text-white mr-auto mb-auto  w-[300px] min-w-[200px]">
      <div //HEADER with Trainer Data
        className="flex p-3 gap-2  bg-neutral-500"
      >
        <div className="w-[70px] h-[70px] rounded-full bg-white">
          <img
            className="object-fit w-full h-full rounded-full"
            src={imgSrc}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">{trainer}</h2>
          <h3 className="text-sm">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col">
        {sideNavButtons.map(({ text, icon }, index) => (
          <motion.div
            key={index}
            onClick={() => {
              changePage(index + 1);
            }}
            className="flex items-center border-b border-gray-700 gap-2 p-4 cursor-pointer hover:bg-gray-700"
          >
            <div className="ml-3">
              {icon}
              <button className="ml-3">{text}</button>
            </div>
          </motion.div>
        ))}
      </div>
      <div
        onClick={() => {
          changePage(4);
        }}
        className="absolute bottom-0 w-full flex items-center gap-2 p-4 cursor-pointer hover:bg-gray-700"
      >
        <SettingsIcon />
        <p>My Settings</p>
      </div>
    </div>
  );
}
