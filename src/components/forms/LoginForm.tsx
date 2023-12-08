import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

//MUI
import CircularProgress from "@mui/material/CircularProgress";

//Redux
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/slices/authSlice";

//Utils
import { axiosPostLoginAndSignup } from "../../utils/axiosFetches";
import { LOCAL_URL } from "../../utils/urls";
import { useNavigate } from "react-router-dom";

type Props = {
  handleCloseLogin?: () => void;
  displayLabels?: boolean;
  btnText?: string;
  backendRoute: string;
  enableNavigate?: boolean;
};

export default function LoginForm({
  handleCloseLogin,
  displayLabels = true,
  btnText = "Login",
  backendRoute,
  enableNavigate = true,
}: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
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
        //fetch
        const res = await axiosPostLoginAndSignup(
          backendRoute,
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
        if (enableNavigate && res.navigateTo) navigate(res.navigateTo);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col space-y-3">
          <div className="flex flex-col">
            {displayLabels ? (
              <div className="flex justify-between items-center">
                <label className="font-normal text-[15px] ml-1" htmlFor="email">
                  Email
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 font-normal text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            ) : formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 ml-auto font-normal text-sm">
                {formik.errors.email}
              </div>
            ) : null}
            <Field
              placeholder="Enter email..."
              className="flex  px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              name="email"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            {displayLabels ? (
              <div className="flex justify-between items-center">
                <label
                  className="font-normal text-[15px] ml-1"
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
            ) : formik.touched.pass && formik.errors.pass ? (
              <div className="text-red-500 ml-auto font-normal text-sm">
                {formik.errors.pass}
              </div>
            ) : null}

            <Field
              placeholder="Enter password..."
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
              name="pass"
              type="password"
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
                btnText
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
