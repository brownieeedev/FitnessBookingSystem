import React from "react";
import TrainerSummaryPanels from "../../components/trainerSummaryPanels/TrainerSummaryPanels";
import EasyTable from "../../components/tables/EasyTable";

function Dashboard() {
  return (
    <React.Fragment>
      <TrainerSummaryPanels />
      <div className="mx-auto my-7 max-w-[90%]">
        <EasyTable />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
