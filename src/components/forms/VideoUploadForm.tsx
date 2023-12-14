import Tabs from "../tabs/Tabs";
import MultiSelect from "../inputs/MultiSelect";

export default function VideoUploadForm() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto  w-full max-w-[550px]">
        <form>
          <h2 className="mb-4 text-center block text-2xl font-medium text-[#07074D]">
            Video Data
          </h2>
          <div className="mb-5  border border-gray-100 rounded-lg p-3 shadow-md flex flex-col items-center ">
            <label className="mb-3 block text-lg font-medium text-[#07074D]">
              What is the type of the video?
            </label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  className="h-5 w-5"
                />
                <label className="pl-3 text-base font-medium text-[#07074D]">
                  Introduction Video
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton2"
                  className="h-5 w-5"
                />
                <label className="pl-3 text-base font-medium text-[#07074D]">
                  Training video
                </label>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Title of the video
            </label>
            <input
              type="text"
              name="guest"
              id="guest"
              placeholder="Title of the video"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Training type
            </label>
            <MultiSelect />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  First Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
