//Components
import { useState } from "react";
import SidePanel from "../components/sidepanel/SidePanel";

//Pages
import Dashboard from "./trainer/Dashboard";
import MyTrainerAccount from "./trainer/MyTrainerAccount";
import AvailabilityPage from "./trainer/AvailabilityPage";

//Utils
import { useMount } from "../hooks/useMount";
import { jwtInterceptor } from "../utils/jwtInterceptor";
import { axiosGet } from "../utils/axiosFetches";
import { toastError } from "../utils/toasts";
import { LOCAL_URL } from "../utils/urls";
//Types
import { TrainerType } from "../types/TrainerType";

const panels: string[] = [
  "Dashboard",
  "Availability",
  "Upload Video",
  "My Account",
];

export default function TrainerPage() {
  const [page, setPage] = useState(1);
  const [trainerData, setTrainerData] = useState<TrainerType>();

  // console.log("trainerData", trainerData);

  useMount(async () => {
    jwtInterceptor();
    //fetch to get trainer data
    try {
      const res = await axiosGet(`${LOCAL_URL}/api/trainers/me`);
      if (res.status === "success") {
        console.log("inside success");
        setTrainerData(res.data);
      }
    } catch (err) {
      toastError("Something went wrong, could not load your data!");
      console.error(err);
    }
  });

  const handlePageChange = (pageNum: number): void => {
    setPage(pageNum);
  };

  const handleTrainerDataChange = (newIntroduction?: string): void => {
    if (!newIntroduction) return;
    setTrainerData((prev) => {
      return {
        ...prev!,
        introduction: newIntroduction,
      };
    });
  };

  return (
    <div className="font-nunito font-light">
      <div className="flex bg-slate-200 min-h-[800px]">
        <div //SIDEPANEL
          className="flex justify-center items-center"
        >
          <SidePanel
            trainer={{
              name: trainerData?.firstname ?? "",
              imgSrc: trainerData?.profilePicture ?? "",
            }}
            changePage={handlePageChange}
          />
        </div>
        <div //MAIN PANEL
          className=" flex flex-col w-full"
        >
          <div //TOP SKIRT
            className="bg-zinc-800 w-full flex items-center justify-between min-h-[70px]"
          >
            <h2 className="text-white  font-light text-xl mx-4">
              {panels[page - 1]}
            </h2>
            <div
              onClick={() => {
                setPage(4);
              }}
              className="m-1 mx-3 select-none flex flex-col items-center cursor-pointer "
            >
              <img
                className="rounded-full w-[30px] h-[30px]"
                src={trainerData?.profilePicture ?? ""}
                alt=""
              />
              <p className="text-white text-sm">My account</p>
            </div>
          </div>
          {(() => {
            switch (page) {
              case 1:
                return <Dashboard />;
              case 2:
                return <AvailabilityPage />;
              case 4:
                return (
                  <MyTrainerAccount
                    trainer={trainerData!}
                    handleTrainerDataChange={handleTrainerDataChange}
                  />
                );
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
