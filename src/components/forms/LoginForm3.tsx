import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import CircularProgress from "@mui/material/CircularProgress";

//Redux
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/slices/authSlice";

//Utils
import { axiosPostLoginAndSignup } from "../../utils/axiosFetches";
import { LOCAL_URL } from "../../utils/urls";

export default function LoginForm3() {
  const dispatch = useAppDispatch();
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
        onSubmit={async (values) => {
          //fetch
          const res = await axiosPostLoginAndSignup(
            `${LOCAL_URL}/api/users/login`,
            values,
            false,
            "Successfully logged in!",
            "Something went wrong when logging in!"
          );
          //handle success on signup
          if (res.token) {
            localStorage.setItem("token", res.token);
            dispatch(login());
          }
          // if (enableNavigate && res.navigateTo) navigate(res.navigateTo);
        }}
      >
        {(formik) => (
          <Form className="flex flex-col space-y-3">
            <div className="flex flex-col">
              <Field
                placeholder="Enter email..."
                className="flex px-3 py-2 md:px-4 md:py-3 border border-gray-400 rounded-lg font-medium placeholder:font-normal"
                name="email"
                type="email"
              />
              <ErrorMessage name="email">
                {(msg) => <div className="text-red-400">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col">
              <Field
                placeholder="Enter password..."
                className="flex px-3 py-2 md:px-4 md:py-3 border border-gray-400 rounded-lg font-medium placeholder:font-normal"
                name="pass"
                type="password"
              />
              <ErrorMessage name="pass">
                {(msg) => <div className="text-red-400">{msg}</div>}
              </ErrorMessage>
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
