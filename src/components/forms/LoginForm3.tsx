import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import CircularProgress from "@mui/material/CircularProgress";

export default function LoginForm3() {
  return (
    <div>
      <Formik
        initialValues={{ email: "", pass: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .trim()
            .email("Invalid email address!")
            .matches(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))(?=\s*$)/,
              "Invalid email address!"
            )
            .required("Required!"),
          pass: Yup.string()
            .min(8, "Must be 8 characters or more!")
            .required("Required!"),
        })}
        onSubmit={async (values, actions) => {
          alert("submitted");
        }}
      >
        {(formik) => (
          <Form className="flex flex-col space-y-3">
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <Field
                placeholder="Enter email..."
                className="pl-2 w-full outline-none border-none flex  px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                name="email"
                type="email"
              />
              <ErrorMessage
                name="email"
                className="text-red-500 ml-auto font-normal text-sm"
              />
            </div>
            <div className="flex flex-col">
              <Field
                placeholder="Enter password..."
                className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                name="pass"
                type="password"
              />
              <ErrorMessage
                name="pass"
                className="text-red-500 ml-auto font-normal text-sm"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="w-full flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                type="submit"
              >
                {formik.isSubmitting ? (
                  <CircularProgress size={30} sx={{ color: "#fff" }} />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
