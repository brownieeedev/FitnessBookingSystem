//Components
import ContactIcons from "../contacticons/ContactIcons";

export default function Footer() {
  return (
    <div className="bottom-0 mt-10 text-[#161616]">
      <div //line effect
        className="h-[1px] w-3/4 m-auto mt-5 bg-gradient-to-r from-transparent via-black to-transparent"
      />{" "}
      <div className="relative overflow-hidden font-inter font-medium flex flex-col justify-between p-10 pt-6 items-center w-full space-y-5">
        <div //blur effect
          className="absolute w-[400px] h-[100px] rounded-full bg-gray-400 blur-3xl -z-10"
        />
        <div>
          <p>&copy; LondonFitness</p>
        </div>
        <div>
          <ContactIcons />
        </div>
        <div>
          <p>2023</p>
        </div>
      </div>
    </div>
  );
}
