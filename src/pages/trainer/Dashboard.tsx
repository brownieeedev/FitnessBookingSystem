import React from "react";
import TrainerSummaryPanels from "../../components/trainerSummaryPanels/TrainerSummaryPanels";
import EasyTable from "../../components/tables/EasyTable";

function Dashboard() {
  return (
    <div className=" max-w-[1300px] mx-auto  h-full">
      <TrainerSummaryPanels />
      <div className="mx-auto my-7 ">
        <EasyTable />
      </div>
    </div>
  );
}

export default Dashboard;
