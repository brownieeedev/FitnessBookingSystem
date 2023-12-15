//Components
import TrainerSelect from "../components/trainerSelect/TrainerSelect";

export default function PersonalOnline() {
  return (
    <div className="text-darkgray text-lg">
      <h1 className="text-center">Get in a quick workout!</h1>
      <p className="text-center">
        If you book a training in the morning you might get a trainer for the
        evening!
      </p>

      <div className="">
        <div
          className="mt-8 flex flex-col items-center justify-center" //CHOOSE TRAINER
        >
          <TrainerSelect />
        </div>
      </div>
    </div>
  );
}
