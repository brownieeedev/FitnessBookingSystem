import { color } from "framer-motion";
import { twMerge } from "tailwind-merge";
type SignProps = {
  text: string;
  color: string;
};

type Props = {
  signsArray: SignProps[];
};

export default function ColorSignsForCalendar({ signsArray }: Props) {
  return (
    <div className="flex  justify-end gap-2">
      {signsArray.map((sign, index) => (
        <div key={index} className="flex items-center">
          <div
            className={twMerge(
              "w-3 h-3 bg-green-400 rounded-full mr-2",
              sign.color
            )}
          ></div>
          <p className="text-sm">{sign.text}</p>
        </div>
      ))}
    </div>
  );
}
