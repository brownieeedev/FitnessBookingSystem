import { useState, useEffect, RefObject } from "react";

type Dimensions = {
   width: number;
   height: number;
};

export const useDimensions = (ref: RefObject<HTMLElement>): Dimensions => {
   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

   useEffect(() => {
      const handleResize = () => {
         if (ref.current) {
            setDimensions({
               width: ref.current.offsetWidth,
               height: ref.current.offsetHeight,
            });
         }
      };
      // Initial measurement
      handleResize();

      // Event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [ref]);

   return dimensions;
};
