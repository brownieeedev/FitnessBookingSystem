import HomeCard from "../components/homeCard/HomeCard";

export default function Personal() {
  return (
    <div>
      <h2 className="text-3xl font-inter font-bold text-darkgray text-center m-4">
        Choose a training
      </h2>
      <div className="flex justify-center gap-9">
        <HomeCard
          className=""
          title="Online training"
          description="Personal training either online or in person"
          navigateTo="/trainings/personal/online"
          image={
            <img
              className="object-cover w-[100%] h-[100%]"
              src="../src/assets/images/online1.jpg"
              alt="traininglondon"
            />
          }
          buttonText="See Availability"
        />
        <HomeCard
          title="In person training"
          description="Train in person with one of our trainers"
          navigateTo="/trainings/personal/inperson"
          image={
            <img
              className="object-cover w-[100%] h-[100%]"
              src="../src/assets/images/coach1.jpg"
              alt="traininglondon"
            />
          }
          buttonText="See Classes"
        />
      </div>
    </div>
  );
}
