import { inputAdornmentClasses } from "@mui/material";
import { useState } from "react";

//Mui Icons
import { CloseIcon } from "../../utils/muiIcons";

export default function MyTrainerAccount() {
  const [editIntroduction, setEditIntroduction] = useState(false);
  const [introductionValue, setIntroductionValue] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, voluptate, quod, quae doloremque dolorum quia   reprehenderit natus quos pariatur doloribus? Quisquam voluptatum, voluptate, quod, quae doloremque dolorum quia reprehenderit natus quos pariatur doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, voluptate, quod, quae doloremque dolorum quia reprehenderit natus quos pariatur doloribus? Quisquam voluptatum, voluptate, quod, quae doloremque dolorum quia reprehenderit natus quos pariatur doloribus?"
  );

  return (
    <div>
      <h1 className="text-2xl mx-5 m-6">
        Your <strong className="font-bold"> Account details</strong>
      </h1>
      <div //Contact and Other information
        className="flex"
      >
        <div className="bg-zinc-100 w-1/2 max-w-[600px]  shadow-2xl p-5 mx-5 rounded-md flex justify-center gap-5">
          <div className="select-none flex flex-col items-center justify-center">
            <img
              className="object-fit shadow-xl w-[280px] h-[280px] rounded-full"
              src="../../src/assets/images/bubu2.jpg"
              alt=""
            />
            <button className="border border-gray-500 rounded-sm my-2 p-3  bg-darkgray text-white hover:opacity-80">
              Change profile picture
            </button>
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <h3 className="text-2xl">Contact information</h3>
            <p className="border-b border-gray-200">
              <strong className="font-bold">Firstname:</strong> Ben
            </p>
            <p className="border-b border-gray-200">
              {" "}
              <strong className="font-bold">Lastname:</strong> Bitter
            </p>
            <p className="border-b border-gray-200">
              <strong className="font-bold">Email:</strong> ben@gmail.com
            </p>
            <p className="border-b border-gray-200">
              {" "}
              <strong className="font-bold">Phone:</strong> +47382986124
            </p>
          </div>
        </div>
        <div className=" w-1/2 max-w-[600px] bg-zinc-100 shadow-2xl p-5 mx-5 rounded-md flex flex-col justify-center gap-5">
          <h2 className="text-2xl text-center">Other information about you</h2>
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
              <textarea
                autoFocus
                cols={100}
                rows={8}
                className="text-lg"
                value={introductionValue}
              />
            </>
          ) : (
            <p className="text-lg">
              {introductionValue !== ""
                ? introductionValue
                : "Your introduction seems to be empty!"}
            </p>
          )}

          <button
            onClick={() => {
              setEditIntroduction((prev) => !prev);
            }}
            className="border border-gray-500 rounded-sm my-2 p-3  bg-darkgray text-white hover:opacity-80"
          >
            {editIntroduction ? "Finish Editing" : "Edit introduction"}
          </button>
        </div>
      </div>
    </div>
  );
}
