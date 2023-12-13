import React from "react";
import TrainerSummaryPanels from "../../components/trainerSummaryPanels/TrainerSummaryPanels";
import EasyTable from "../../components/tables/EasyTable";

type PanelData = {
  num: number;
  text: string;
};

type Props = {
  panelValues: number[];
};

function Dashboard({ panelValues }: Props) {
  return (
    <div className=" max-w-[1300px] mx-auto  h-full">
      <TrainerSummaryPanels
        panelValues={[
          { num: panelValues[0], text: "Trainings Today" },
          { num: panelValues[1], text: "Booked trainings" },
          { num: panelValues[2], text: "Personal Training" },
          { num: panelValues[3], text: "Personal Training" },
        ]}
      />
      <div className="mx-auto my-7 ">
        <EasyTable />
      </div>
    </div>
  );
}

export default Dashboard;
