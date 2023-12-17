//Packages
// import dayjs from "dayjs";
//Prime React
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Calendar } from "primereact/calendar";

type Props = {
  handleDateChange: (date: Date) => void;
  date: Date | null;
};

export default function PrimeCalendar({ handleDateChange, date }: Props) {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1, 1);
  maxDate.setMonth(maxDate.getMonth() + 1, 0);

  const currentMonth = new Date().getMonth();
  const currentYear: string = new Date().getFullYear().toString();
  const nextYearNumber: number = new Date().getFullYear() + 1;
  const nextYear: string = nextYearNumber.toString();
  const yearRange =
    currentMonth === 11 ? `${currentYear}:${nextYear}` : currentYear;

  return (
    <PrimeReactProvider>
      <Calendar
        inline
        name="date"
        className="border border-gray-300 rounded-lg p-2 p-datepicker-today:bg-red-200"
        panelClassName="bg-white"
        showButtonBar={false}
        value={date}
        minDate={new Date()}
        maxDate={maxDate}
        showMinMaxRange={true}
        yearRange={yearRange} //not seem to work
        onChange={(e) => {
          handleDateChange(e.target.value as Date);
        }}
      />
    </PrimeReactProvider>
  );
}
