import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
//Framer
import { motion, AnimatePresence } from "framer-motion";
//Icons
import SendIcon from "@mui/icons-material/Send";
//MUI
import CircularProgress from "@mui/material/CircularProgress";
//Tailwind styles used multiple times
const inputContainer = "flex flex-col mt-2";
const errorLabel = "text-red-500 m-1 font-inter font-sm italic";
const inputFormat =
  "bg-transparent font-light text-black rounded-xl text-lg mt-1 border border-gray-800 p-3 pl-4";
const labelFormat = "font-inter text-darkgray font-semibold text-md ml-1";
//Components
// import BottomNavigation from "../components/bottomNavigation/BottomNavigation";
//Fetches
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

// TODO:
//Fix cannot click bottomNavigation bug
// 1.) debounce email sending functionality
// 2.) checking if email has been sent by the user with the same text
// 3.) give feedback to the user if could not save to db
// 4.) feedback
// 5.) Get in Touch with react-email

export default function GetInTouch() {
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-darkgray text-3xl mt-3 font-inter text-center">
        Feel free to reach out to us!
      </h1>
      <div className="flex flex-col items-center">
        <Formik
          initialValues={{ email: "", message: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .trim()
              .email("Invalid email address!")
              .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))(?=\s*$)/,
                "Invalid email address!"
              )
              .required("Required!"),
            message: Yup.string()
              .required("Required!")
              .min(20, "Message seems to be a little short!")
              .max(1000, "Message is too long!"),
          })}
          onSubmit={async (values, actions) => {
            setIsSubmitting(true);
            const postData = async () => {
              //   const reqOps = {
              //     method: "POST",
              //     headers: { "Content-Type": "application/json" },
              //     body: JSON.stringify(values),
              //   };
              //   const res = await fetch(`${BASE_URL}/api/contact/create`, reqOps);
              //   return res.json();
            };
            try {
              setTimeout(async () => {
                await postData();
                setIsSubmitting(false);
                actions.resetForm();
                toast.success(
                  "Successfully sent message! I am answering asap!",
                  {
                    theme: "dark",
                    autoClose: 4000,
                    pauseOnHover: false,
                    closeOnClick: true,
                    hideProgressBar: false,
                  }
                );
              }, 1000);
            } catch (err) {
              setIsSubmitting(false);
              toast.error(
                "There was an error sending your message! Try again!",
                {
                  theme: "dark",
                  autoClose: 3000,
                  pauseOnHover: false,
                  closeOnClick: true,
                  hideProgressBar: true,
                }
              );
            }
          }}
        >
          {(formik) => (
            <Form className="font-geologica w-[80%] max-w-[650px] mt-5 mb-3">
              <motion.div
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6 },
                }}
                className={inputContainer}
              >
                <label className={labelFormat} htmlFor="">
                  Your Email
                </label>
                <AnimatePresence>
                  <Field className={inputFormat} name="email" type="text" />
                  {formik.touched.email && formik.errors.email ? (
                    <motion.div
                      key={formik.errors.email}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.2 },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.1 },
                      }}
                      className={errorLabel}
                    >
                      {formik.errors.email}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
              <motion.div
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.1 },
                }}
                className={inputContainer}
              >
                <label className={labelFormat} htmlFor="">
                  Message
                </label>
                <AnimatePresence>
                  <Field
                    as="textarea"
                    className={inputFormat}
                    name="message"
                    rows={10}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <motion.div
                      key={formik.errors.message}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.2,
                          delay: 0.1,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.1 },
                      }}
                      className={errorLabel}
                    >
                      {formik.errors.message}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
              <motion.div //SUBMIT
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
                className="w-full flex items-center justify-center mt-5"
              >
                <button
                  className="w-full text-darkgray flex items-center justify-center p-3 font-inter font-semibold border border-darkgray rounded-md  hover:bg-darkgray hover:text-white hover:border-gray-800"
                  type="submit"
                >
                  SEND EMAIL
                  {submitting ? (
                    <>
                      <CircularProgress
                        sx={{ ml: 1, mb: "1px" }}
                        size={20}
                        color="inherit"
                      />{" "}
                    </>
                  ) : (
                    <>
                      <SendIcon
                        sx={{
                          ml: 1,
                          mb: "1px",
                          fontSize: 20,
                        }}
                      />
                    </>
                  )}
                </button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </div>
      {/* <BottomNavigation
            previous={{
               text: "Resume",
               navigateTo: "/resume",
            }}
         /> */}
    </div>
  );
}
