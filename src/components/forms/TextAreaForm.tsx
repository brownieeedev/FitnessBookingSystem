import { Formik, Form } from "formik";
import * as Yup from "yup";

//Utils
import { axiosPatch } from "../../utils/axiosFetches";
import { toastError, toastSuccess } from "../../utils/toasts";
import { LOCAL_URL } from "../../utils/urls";
import { jwtInterceptor } from "../../utils/jwtInterceptor";

//Prime
import { Editor } from "primereact/editor";

type TextAreaFormProps = {
  rows?: number;
  cols?: number;
  initialValues?: { textarea: string };
  finishEditingIntroduction: (ne0wIntroduction: string) => void;
};

//TODO:
//handle line breaks to save as well

function TextAreaForm({
  initialValues = { textarea: "" },
  finishEditingIntroduction,
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
        //fetch
        try {
          jwtInterceptor();
          const res = await axiosPatch(
            `${LOCAL_URL}/api/trainers/updateIntroduction`,
            values
          );
          if (res.status === "success") {
            finishEditingIntroduction(values.textarea);
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
          {/* <Field
            className="text-lg"
            name="textarea"
            as="textarea"
            cols={cols}
            rows={rows}
          /> */}
          <Editor
            name="textarea"
            value={formik.values.textarea}
            onTextChange={(e) => {
              formik.setFieldValue("textarea", e.textValue);
            }}
            style={{ height: "320px" }}
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
