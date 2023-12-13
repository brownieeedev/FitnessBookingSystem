import TrainerSummaryPanels from "../../components/trainerSummaryPanels/TrainerSummaryPanels";
import EasyTable from "../../components/tables/EasyTable";

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
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Currently booked trainings
        </h2>
        <div className="w-full mx-auto">
          <EasyTable bookedTrainings={bookedTrainings} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
