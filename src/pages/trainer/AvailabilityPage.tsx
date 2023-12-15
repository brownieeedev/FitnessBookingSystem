//Components
import ReactBigCalendar from "../../components/calendar/ReactBigCalendar";
import ColorSignsForCalendar from "../../components/calendar/ColorSignsForCalendar";
//Types
import { AvailableTime } from "../../types/TrainerType";
import { Booking } from "../../types/BookingType";
type Props = {
  trainerAvailability: AvailableTime[];
  bookings: Booking[];
  refetch: () => void;
};

export default function AvailabilityPage({
  trainerAvailability,
  refetch,
  bookings,
}: Props) {
  return (
    <div className="">
      {/* <h2 className="text-center text-3xl font-bold m-10">Your Availability</h2> */}
      <div className="m-10 ">
        <ColorSignsForCalendar
          signsArray={[
            { text: "Your availability", color: "bg-blue-500" },
            { text: "Booked trainings", color: "bg-green-500" },
          ]}
        />
        <ReactBigCalendar
          trainerAvailability={trainerAvailability}
          bookings={bookings}
          refetch={refetch}
        />
      </div>
    </div>
  );
}
