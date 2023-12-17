import { useState } from "react";
//Mui Icons
import {
  CloseIcon,
  EmailIcon,
  PhoneIcon,
  EmojiTransportationIcon,
  WcIcon,
} from "../../utils/icons/muiIcons";
import {
  FaBirthdayCake,
  IoIosFitness,
  IoPersonSharp,
} from "../../utils/icons/reactIcons";
//Packages
import dayjs from "dayjs";
//Components
import TextAreaForm from "../../components/forms/TextAreaForm";
//Types
import { TrainerType } from "../../types/TrainerType";
type TrainerAccountProps = {
  trainer: TrainerType;
  handleTrainerDataChange: (newIntroduction?: string) => void;
};

//TODO:
// handle patch for each field
// after changing a field with useEffect update the trainer data visually with a re-render

export default function MyTrainerAccount({
  trainer,
  handleTrainerDataChange,
}: TrainerAccountProps) {
  const [editIntroduction, setEditIntroduction] = useState<boolean>(false);

  const handleCloseTextareaOnSuccess = (newIntroduction: string): void => {
    handleTrainerDataChange(newIntroduction);
    setEditIntroduction(false);
  };

  return (
    <div>
      <h1 className="text-2xl mx-5 m-6">
        Your <strong className="font-bold"> Account details</strong>
      </h1>
      <div //Contact and Other information
        className="flex justify-center"
      >
        <div className="bg-zinc-100 w-1/2 max-w-[600px]  shadow-2xl p-5 mx-5 rounded-md flex justify-center gap-5">
          <div className="select-none flex flex-col items-center justify-center">
            <img
              className="object-fit shadow-xl w-[280px] h-[280px] rounded-full"
              src={trainer.profilePicture}
              alt=""
            />
            <button className="border border-gray-500 rounded-sm my-2 p-3  bg-darkgray text-white hover:opacity-80">
              Change profile picture
            </button>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <h3 className="text-2xl font-bold">Contact information</h3>
            <div className="border-b border-gray-200 flex items-center gap-1">
              <div className="flex">
                <IoPersonSharp className="mb-[1px] text-lg" />
                <p className="text-[9px]">1</p>
              </div>
              <p className="">
                <strong className="font-bold">Firstname:</strong>{" "}
                {trainer.firstname}
              </p>
            </div>
            <div className="border-b border-gray-200 flex items-center gap-1">
              <div className="flex">
                <IoPersonSharp className="mb-[1px] text-lg" />
                <p className="text-[9px]">2</p>
              </div>
              <p className="border-b border-gray-200">
                <strong className="font-bold">Lastname:</strong>{" "}
                {trainer.lastname}
              </p>
            </div>
            <div className="border-b border-gray-200 flex items-center gap-1">
              <EmailIcon sx={{ fontSize: "20px" }} />
              <p className="border-b border-gray-200">
                <strong className="font-bold">Email:</strong> {trainer.email}
              </p>
            </div>
            <div className="border-b border-gray-200 flex items-center gap-1">
              <PhoneIcon sx={{ mb: "1px", fontSize: "20px" }} />
              <p className="border-b border-gray-200">
                <strong className="font-bold">Phone:</strong> {trainer.phone}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-1/2 max-w-[600px] bg-zinc-100 shadow-2xl p-5 mx-5 rounded-md flex flex-col justify-center gap-5">
          <h2 className="text-2xl text-center font-bold">
            Other Information About You
          </h2>
          <div className=" px-3 flex flex-col justify-center space-y-5">
            <div className="border-b border-gray-200 flex items-center gap-1">
              <IoIosFitness className="mb-[1px] text-lg" />
              <p className="border-b border-gray-200">
                <strong className="font-bold">Training types: </strong>
                {trainer?.trainingTypes?.join(", ")}
              </p>
            </div>
            <div className="border-b border-gray-200 flex items-center gap-1">
              <EmojiTransportationIcon sx={{ fontSize: "21px" }} />
              <p className="border-b border-gray-200">
                <strong className="font-bold">Places of availability:</strong>{" "}
                {trainer.places.join(", ")}
              </p>
            </div>
            <div className="border-b border-gray-200 flex items-center gap-1">
              <FaBirthdayCake className="text-lg mb-[5px]" />
              <p className="border-b border-gray-200">
                <strong className="font-bold">Date of Birth:</strong>{" "}
                {trainer.dateOfBirth
                  ? dayjs(trainer.dateOfBirth).format("YYYY.MM.DD")
                  : null}
              </p>
            </div>
            <div className="border-b border-gray-200 flex items-center gap-1">
              <WcIcon sx={{ fontSize: "21px" }} />
              <p className="border-b border-gray-200">
                <strong className="font-bold">Sex:</strong> {trainer.sex}
              </p>
            </div>
            <p className="cursor-pointer border-b border-gray-200">
              {" "}
              <strong className="font-bold">Social links:</strong>
              {trainer.links.map((linkData, index) => {
                return (
                  <div className="flex my-2 gap-1 underline" key={index}>
                    <img
                      className="w-[25px] h-[25px]"
                      src={
                        linkData.name === "facebook"
                          ? "../../src/assets/downloadedIcons/fb1.svg"
                          : linkData.name === "instagram"
                          ? "../../src/assets/downloadedIcons/insta1.svg"
                          : "../../src/assets/downloadedIcons/insta1.svg"
                      }
                      alt=""
                    />
                    <a href={linkData.link} target="_blank" rel="noreferrer">
                      {linkData.name}
                    </a>
                  </div>
                );
              })}
            </p>
          </div>
        </div>
      </div>
      <div //INTRODUCTION
        className="flex flex-col justify-center items-center mb-10"
      >
        <h2 className="text-3xl text-center mx-3 mt-12 mb-3">
          <strong className="font-bold">Introduction</strong>
        </h2>
        <div className="bg-zinc-50 shadow-2xl p-5 mx-5 rounded-md flex flex-col justify-center gap-5 max-w-[800px]">
          {editIntroduction ? (
            <>
              <div className="flex items-center justify-end">
                <button
                  onClick={() => {
                    setEditIntroduction(false);
                  }}
                  className="border bg-red-500 text-white p-1 px-3 rounded-full"
                >
                  Back <CloseIcon sx={{ mb: "1px", color: "white" }} />
                </button>
              </div>
              <TextAreaForm
                initialValues={{ textarea: trainer.introduction }}
                finishEditingIntroduction={handleCloseTextareaOnSuccess}
              />
            </>
          ) : (
            <>
              <p className="text-lg">
                {trainer.introduction !== ""
                  ? trainer.introduction
                  : "Your introduction seems to be empty!"}
              </p>
              <button
                onClick={() => {
                  setEditIntroduction((prev) => !prev);
                }}
                className="border border-gray-500 rounded-sm my-2 p-3  bg-darkgray text-white hover:opacity-80"
              >
                Edit introduction
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
