import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

type Props = {
  handleCloseLogin: () => void;
};

export default function LoginForm({ handleCloseLogin }: Props) {
  return (
    <Formik
      initialValues={{ email: "", pass: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address!")
          .required("Required!"),
        pass: Yup.string()
          .min(8, "Must be 8 characters or more!")
          .required("Required!"),
      })}
      onSubmit={(values, actions) => {
        //fetch
        handleCloseLogin();
      }}
    >
      {(formik) => (
        <Form>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="font-normal text-[14px] ml-1" htmlFor="email">
                Email
              </label>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 font-normal text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <Field
              className="border text-[15px] font-normal border-gray-800 rounded-full p-2 pl-4 w-[300px] mb-2"
              name="email"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label
                className="font-normal text-[14px] ml-1"
                htmlFor="Password"
              >
                Password
              </label>
              {formik.touched.pass && formik.errors.pass ? (
                <div className="text-red-500 font-normal  text-sm">
                  {formik.errors.pass}
                </div>
              ) : null}
            </div>
            <Field
              className="border text-[14px] font-normal border-gray-800 rounded-full p-2 pl-4 w-[300px] mb-2"
              name="pass"
              type="password"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border border-gray-300 bg-amber-300 p-7 pt-2 pb-2 rounded-full"
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
