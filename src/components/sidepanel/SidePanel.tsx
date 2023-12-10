//MUI Icons
import {
  DashboardCustomizeIcon,
  AccessTimeFilledIcon,
  VideoCallIcon,
} from "../../utils/muiIcons";
//Framer
import { motion } from "framer-motion";

type SideNavButtonProps = {
  text: string;
  icon: React.ReactNode;
};

type SidePanelProps = {
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
  trainer: { imgSrc, name: trainer, title = "Personal Trainer" },
}: SidePanelProps) {
  return (
    <div className="bg-zinc-800 select-none h-full text-white mr-auto mb-auto  w-[300px] min-w-[200px]">
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
        {sideNavButtons.map(({ text, icon }) => (
          <motion.div
            key={text}
            className="flex items-center border-b border-gray-700 gap-2 p-4 cursor-pointer hover:bg-gray-700"
          >
            <div className="ml-3">
              {icon}
              <button className="ml-3">{text}</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
