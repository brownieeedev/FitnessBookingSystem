import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

//Utils
import { axiosPatch } from "../../utils/axiosFetches";
import { toastError, toastSuccess } from "../../utils/toasts";
import { LOCAL_URL } from "../../utils/urls";
import { jwtInterceptor } from "../../utils/jwtInterceptor";

type TextAreaFormProps = {
  rows?: number;
  cols?: number;
  initialValues?: { textarea: string };
  setEditIntroduction: () => void;
};

function TextAreaForm({
  rows = 8,
  cols = 80,
  initialValues = { textarea: "" },
  setEditIntroduction,
}: TextAreaFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        textarea: Yup.string()
          .trim()
          .required("Required!")
          .max(1000, "Must be 1000 characters or less!"),
      })}
      onSubmit={async (values) => {
        console.log("submit");
        console.log(values);
        //fetch to backend with patch
        try {
          jwtInterceptor();
          const res = await axiosPatch(
            `${LOCAL_URL}/api/trainers/updateIntroduction`,
            values
          );
          if (res.status === "success") {
            setEditIntroduction();
            toastSuccess("Successfully updated your introduction!");
          }
        } catch (err) {
          toastError(
            "Something went wrong, could not update your introduction!"
          );
          console.error(err);
        }
      }}
    >
      {(formik) => (
        <Form>
          <Field
            className="text-lg"
            name="textarea"
            as="textarea"
            cols={cols}
            rows={rows}
          />
          {formik.touched.textarea && formik.errors.textarea ? (
            <div className="text-red-500">{formik.errors.textarea}</div>
          ) : null}
          <button
            disabled={
              initialValues.textarea === formik.values.textarea ||
              formik.isSubmitting ||
              !formik.isValid
            }
            className="border disabled:cursor-not-allowed disabled:opacity-60 w-full border-gray-500 rounded-sm my-2 p-3  bg-darkgray text-white hover:opacity-80"
            type="submit"
          >
            Update Changes
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default TextAreaForm;
