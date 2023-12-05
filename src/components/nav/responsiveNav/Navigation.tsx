import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

//MUI Icons
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";

const variants = {
   open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
   },
   closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
   },
};

const items = [
   {
      text: "About me",
      icon: <AccessibilityIcon />,
   },
   {
      text: "Projects",
      icon: <WorkIcon />,
   },
   {
      text: "Resume",
      icon: <DescriptionIcon />,
   },
   {
      text: "Get in touch",
      icon: <EmailIcon />,
   },
];
type Props = {
   toggle: () => void;
};

export const Navigation = ({ toggle }: Props) => (
   <motion.ul className="nav-ul" variants={variants}>
      {items.map((item, idx) => (
         <MenuItem
            toggle={toggle}
            text={item.text}
            icon={item.icon}
            key={idx}
            index={idx}
         />
      ))}
   </motion.ul>
);
