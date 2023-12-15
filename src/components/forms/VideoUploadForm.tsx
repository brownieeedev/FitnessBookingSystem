// import Tabs from "../tabs/Tabs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MultiSelect from "../inputs/MultiSelect";
import { useState } from "react";

const initialValues = {
  videoTitle: "",
  radioGroup: "",
  selectedOptions: [],
};

export default function VideoUploadForm() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [multiSelectTouched, setMultiSelectTouched] = useState(false);

  console.log("selectedOptions", selectedOptions);
  console.log("multiSelectTouched", multiSelectTouched);

  const handleKeywordsChange = (selectedOptions: string[]) => {
    setSelectedOptions(selectedOptions);
  };
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto  w-full max-w-[550px]">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            videoTitle: Yup.string()
              .required("Required!")
              .max(50, "Too Long Title!")
              .min(4, "Too Short Title!"),
            radioGroup: Yup.string().required("Choose a video type!"),
          })}
          onSubmit={() => {
            console.log("submitted");
          }}
        >
          {() => (
            <Form>
              <h2 className="mb-4 text-center block text-2xl font-medium text-[#07074D]">
                Video Data
              </h2>
              <div className="border border-gray-100 rounded-lg p-3 shadow-md flex flex-col items-center ">
                <label className="mb-3 block text-lg font-medium text-[#07074D]">
                  What is the type of the video?
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      name="radioGroup"
                      id="radioButton1"
                      className="h-5 w-5"
                      value="Introduction Video"
                    />
                    <label className="pl-3 text-base font-medium text-[#07074D]">
                      Introduction Video
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      name="radioGroup"
                      id="radioButton2"
                      className="h-5 w-5"
                      value="Training video"
                    />
                    <label className="pl-3 text-base font-medium text-[#07074D]">
                      Training video
                    </label>
                  </div>
                </div>
              </div>
              <ErrorMessage name="radioGroup">
                {(msg) => <div className="text-red-400">{msg}</div>}
              </ErrorMessage>
              <div className="my-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Title of the video
                </label>
                <Field
                  type="text"
                  name="videoTitle"
                  id="guest"
                  placeholder="Title of the video"
                  min="0"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6  text-base font-normal text-[#6B7280] outline-none focus:border-blue focus:shadow-md"
                />
                <ErrorMessage name="videoTitle">
                  {(msg) => <div className="text-red-400">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-5">
                <label className=" block text-base font-medium text-[#07074D]">
                  Training types / keywords
                </label>
                <MultiSelect
                  setChoosedKeywords={handleKeywordsChange}
                  choosedTypes={selectedOptions}
                />
                {multiSelectTouched && selectedOptions.length === 0 ? (
                  <div className="text-red-400">Choose at least 1 keyword!</div>
                ) : null}
              </div>
              <div className="">
                <button
                  onClick={() => {
                    setMultiSelectTouched(true);
                  }}
                  type="submit"
                  className="w-full hover:shadow-form rounded-md bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Upload for review
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
