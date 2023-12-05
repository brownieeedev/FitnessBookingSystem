import { motion, SVGMotionProps } from "framer-motion";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
   <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
   />
);

type Props = {
   toggle: () => void;
};

export const MenuToggle = ({ toggle }: Props) => {
   return (
      <button
         className="menu-button"
         onClick={() => {
            toggle();
         }}
      >
         <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
               className="text-white"
               variants={{
                  closed: { d: "M 2 2.5 L 20 2.5", stroke: "#ffffd2" },
                  open: { d: "M 3 16.5 L 17 2.5", stroke: "#ffffd2" },
               }}
            />
            <Path
               d="M 2 9.423 L 20 9.423"
               variants={{
                  closed: { opacity: 1, stroke: "#ffffd2" },
                  open: { opacity: 0, stroke: "#ffffd2" },
               }}
               transition={{ duration: 0.1 }}
            />
            <Path
               variants={{
                  closed: { d: "M 2 16.346 L 20 16.346", stroke: "#ffffd2" },
                  open: { d: "M 3 2.5 L 17 16.346", stroke: "#ffffd2" },
               }}
            />
         </svg>
      </button>
   );
};
