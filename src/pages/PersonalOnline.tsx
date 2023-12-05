import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import "../components/react-calendar/Sample.css";

export default function PersonalOnline() {
  return (
    <div className="text-darkgray text-lg">
      <h1 className="text-center">Get in a quick workout!</h1>
      <p className="text-center">
        If you book a training in the morning you might get a trainer for the
        evening!
      </p>
      <div className="mt-8">
        <h2 className="text-center font-bold text-2xl">Choose a date</h2>
      </div>
      <div className="Sample flex justify-center items-center">
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar
              maxDetail="month"
              locale="en-GB"
              showNavigation={false}
              showWeekNumbers={false}
              // tileContent={}
              minDate={new Date(Date.now())}
              onChange={() => {
                console.log("changed");
              }}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
