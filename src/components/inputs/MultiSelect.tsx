import { useState } from "react";

const trainingTypes = ["Samba", "Salsa", "Bachata", "Kizomba", "Zouk"];

type MultiSelectProps = {
  setChoosedKeywords: (choosedOptions: string[]) => void;
  choosedTypes: string[];
};

export default function MultiSelect({
  setChoosedKeywords,
  choosedTypes,
}: MultiSelectProps) {
  const [showElements, setShowElements] = useState(false);
  console.log(choosedTypes);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center relative">
        <div className="w-full">
          <div className="my-2 p-1 flex border border-gray-200 bg-white rounded-md">
            <div className="flex flex-auto flex-wrap ">
              {choosedTypes.map((trainingType) => (
                <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                  <div className="text-xs font-normal leading-none max-w-full flex-initial">
                    <p className="cursor-default">{trainingType}</p>
                  </div>
                  <div
                    //Delete X Icon inside CHIP
                    onClick={() => {
                      const newChoosedTypes: string[] = [
                        ...choosedTypes,
                      ].filter((type) => type !== trainingType);
                      setChoosedKeywords(newChoosedTypes);
                    }}
                    className="flex flex-auto flex-row-reverse"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-1 focus:shadow-md">
                <input
                  placeholder={
                    choosedTypes.length === 0 ? "Select or type keywords" : ""
                  }
                  className="group bg-transparent  py-3 px-6 appearance-none outline-none h-full w-full text-gray-800 "
                />
              </div>
            </div>
            <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
              <button
                onClick={(e) => {
                  setShowElements((prev) => !prev);
                  e.preventDefault();
                }}
                className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-chevron-up w-4 h-4"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {showElements
          ? trainingTypes.map((trainingType) => {
              return (
                <div
                  onClick={() => {
                    if (choosedTypes.some((type) => type === trainingType))
                      return;
                    const newChoosedTypes = [...choosedTypes, trainingType];
                    setChoosedKeywords(newChoosedTypes);
                  }}
                  className="cursor-pointer  border  w-full border-gray-200 border-b hover:bg-teal-100"
                >
                  <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                    <div className="w-full items-center flex">
                      <div className="mx-2 leading-6  ">{trainingType}</div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
