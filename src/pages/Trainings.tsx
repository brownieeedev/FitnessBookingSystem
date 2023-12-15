//Components
import HomeCard from "../components/homeCard/HomeCard";
import ChooseCards from "../components/cards/ChooseCards";

export default function Trainings() {
  return (
    <div>
      <h2 className="text-3xl font-inter font-bold text-darkgray text-center m-4">
        Choose a training
      </h2>
      <div className="flex justify-center gap-9">
        <ChooseCards />
        {/* <HomeCard
          className=""
          title="Personal training"
          description="Personal training either online or in person"
          navigateTo="/trainings/personal"
          image={
            <img
              className="object-cover w-[100%] h-[100%]"
              src="./src/assets/images/coach1.jpg"
              alt="traininglondon"
            />
          }
          buttonText="See Availability"
        />
        <HomeCard
          title="Group training"
          description="Group training with 5-10 people in a class"
          navigateTo="/trainings/group"
          image={
            <img
              className="object-cover w-[100%] h-[100%]"
              src="./src/assets/images/group1.jpg"
              alt="traininglondon"
            />
          }
          buttonText="See Classes"
        /> */}
      </div>
    </div>
  );
}
