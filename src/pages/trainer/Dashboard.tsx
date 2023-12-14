import TrainerSummaryPanels from "../../components/trainerSummaryPanels/TrainerSummaryPanels";
import EasyTable from "../../components/tables/EasyTable";

//Components
import Tabs from "../../components/tabs/Tabs";
//Types
import { Booking } from "../../types/BookingType";
type Props = {
  panelValues: number[];
  bookedTrainings: Booking[];
};

function Dashboard({ panelValues, bookedTrainings }: Props) {
  return (
    <div className="">
      <div className="h-full my-6 mx-auto  max-w-[95%]">
        <TrainerSummaryPanels
          panelValues={[
            { num: panelValues[0], text: "Trainings Today" },
            { num: panelValues[1], text: "Online trainings" },
            { num: panelValues[2], text: "In Person trainings" },
            { num: panelValues[3], text: "Booked Overall" },
          ]}
        />
        <div className="flex justify-between mt-5 mb-1">
          <h2 className="text-2xl font-semibold mt-6 ">
            Currently booked trainings
          </h2>
          <Tabs />
        </div>
        <div className="w-full mx-auto">
          <EasyTable bookedTrainings={bookedTrainings} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
