//Components
import { useEffect, useState } from "react";
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
import { Booking } from "../types/BookingType";

const panels: string[] = [
  "Dashboard",
  "Availability",
  "Upload Video",
  "My Account",
];

export default function TrainerPage() {
  const [page, setPage] = useState<number>(1);
  const [trainerData, setTrainerData] = useState<TrainerType>();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [refetch, setRefetch] = useState(false);

  // console.log("trainerData", trainerData);

  const fetchTrainerData = async () => {
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
  };
  const fetchBookedTrainings = async () => {
    try {
      const res = await axiosGet(`${LOCAL_URL}/api/trainers/getmybookings`);
      console.log(res);
      if (res.statusCode === 200) {
        setBookings(res.data);
      }
    } catch (error) {
      toastError("Something went wrong, could not load your data!");
      console.error(error);
    }
  };

  useMount(async () => {
    jwtInterceptor();
    //fetches
    fetchTrainerData();
    fetchBookedTrainings();
  });

  useEffect(() => {
    sessionStorage.setItem("page", page.toString());
  }, [page]);

  //Handling refetch by setting a state called refetch
  const handleRefetchChange = (): void => {
    setRefetch((prev) => !prev);
  };
  useEffect(() => {
    fetchTrainerData();
  }, [refetch]);

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
                return (
                  <AvailabilityPage
                    refetch={handleRefetchChange}
                    trainerAvailability={trainerData?.available!}
                    bookings={bookings}
                  />
                );
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
