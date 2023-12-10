//Components
import { useState } from "react";
import SidePanel from "../components/sidepanel/SidePanel";

//Pages
import Dashboard from "./trainer/Dashboard";
import MyTrainerAccount from "./trainer/MyTrainerAccount";

export default function TrainerPage() {
  const [page, setPage] = useState(4);
  return (
    <div className="font-nunito font-light">
      <div className="flex bg-slate-200 min-h-[800px]">
        <div className="flex justify-center items-center">
          <SidePanel
            trainer={{
              name: "Ben",
              imgSrc: "../../src/assets/images/bubu2.jpg",
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-zinc-800 w-full flex items-center justify-between min-h-[70px]">
            <h2 className="text-white  font-light text-xl mx-4">Dashboard</h2>
            <div className="m-1 mx-3 select-none flex flex-col items-center cursor-pointer ">
              <img
                className="rounded-full w-[30px] h-[30px]"
                src="../../src/assets/images/bubu2.jpg"
                alt=""
              />
              <p className="text-white text-sm">My account</p>
            </div>
          </div>
          {(() => {
            switch (page) {
              case 1:
                return <Dashboard />;
              case 4:
                return <MyTrainerAccount />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
