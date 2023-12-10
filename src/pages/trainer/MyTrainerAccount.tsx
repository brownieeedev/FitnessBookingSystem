import { useState } from "react";
//Mui Icons
import { CloseIcon } from "../../utils/muiIcons";
//Components
import TextAreaForm from "../../components/forms/TextAreaForm";
//Types
import { TrainerType } from "../../types/TrainerType";
type TrainerAccountProps = {
  trainer: TrainerType;
};

export default function MyTrainerAccount({ trainer }: TrainerAccountProps) {
  const [editIntroduction, setEditIntroduction] = useState<boolean>(false);
  const [introductionValue, setIntroductionValue] = useState<string>();

  const handleCloseTextareaOnSuccess = (): void => {
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
            <h3 className="text-2xl">Contact information</h3>
            <p className="border-b border-gray-200">
              <strong className="font-bold">Firstname:</strong>{" "}
              {trainer.firstname}
            </p>
            <p className="border-b border-gray-200">
              {" "}
              <strong className="font-bold">Lastname:</strong>{" "}
              {trainer.lastname}
            </p>
            <p className="border-b border-gray-200">
              <strong className="font-bold">Email:</strong> {trainer.email}
            </p>
            <p className="border-b border-gray-200">
              {" "}
              <strong className="font-bold">Phone:</strong> {trainer.phone}
            </p>
          </div>
        </div>
        <div className=" w-1/2 max-w-[600px] bg-zinc-100 shadow-2xl p-5 mx-5 rounded-md flex flex-col justify-center gap-5">
          <h2 className="text-2xl text-center">Other Information About You</h2>
          <div className=" px-3 flex flex-col justify-center space-y-5">
            <p className="border-b border-gray-200">
              <strong className="font-bold">Training types:</strong> Dancing
              class, Yoga, Pilates
            </p>
            <p className="border-b border-gray-200">
              {" "}
              <strong className="font-bold">
                Places of availability:
              </strong>{" "}
              London
            </p>
            <p className="border-b border-gray-200">
              <strong className="font-bold">Sex:</strong> Male
            </p>
            <p className="cursor-pointer border-b underline border-gray-200">
              {" "}
              <strong className="font-bold">Social links:</strong>facebook,
              instagram, tiktok
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
                setEditIntroduction={handleCloseTextareaOnSuccess}
              />
              {/* <textarea
                autoFocus
                cols={100}
                rows={8}
                className="text-lg"
                value={introductionValue}
              /> */}
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
