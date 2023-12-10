import TrainerSummaryPanels from "../components/trainerSummaryPanels/TrainerSummaryPanels";
import SidePanel from "../components/sidepanel/SidePanel";
export default function TrainerPage() {
  return (
    <div className="">
      <h2 className="text-black font-bold text-xl">Team Member Dasboard</h2>
      <div className="bg-white">
        <div className="flex justify-center items-center">
          <SidePanel
            trainer={{
              name: "Ben",
              imgSrc: "../../src/assets/images/bubu2.jpg",
            }}
          />
          <TrainerSummaryPanels />
        </div>
      </div>
    </div>
  );
}
