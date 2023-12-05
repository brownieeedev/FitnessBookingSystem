import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
   open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
         type: "spring",
         stiffness: 20,
         restDelta: 2,
      },
   }),
   closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
         delay: 0.1,
         type: "spring",
         stiffness: 400,
         damping: 40,
      },
   },
};

export const ResponsiveNavigation = () => {
   const [isOpen, toggleOpen] = useCycle(false, true);
   const containerRef = useRef(null);
   const { height } = useDimensions(containerRef);

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
   }, [isOpen]);

   return (
      <motion.nav
         className="responsive-nav"
         initial={false}
         animate={isOpen ? "open" : "closed"}
         custom={height}
         ref={containerRef}
      >
         <motion.div className="background" variants={sidebar} />
         <Navigation toggle={() => toggleOpen()} />
         <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
   );
};
