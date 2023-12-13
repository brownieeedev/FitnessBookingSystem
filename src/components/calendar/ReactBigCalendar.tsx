import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import addHours from "date-fns/addHours";
import startOfHour from "date-fns/startOfHour";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

//Components
import BasicModal from "../modals/BasicModal";
//Types
import { SlotInfo } from "react-big-calendar";
import { AvailableTime } from "../../types/TrainerType";
import { Booking } from "../../types/BookingType";

type BigCalendarProps = {
  trainerAvailability: AvailableTime[];
  bookings: Booking[];
  refetch: () => void;
};

export default function ReactBigCalendar({
  trainerAvailability,
  bookings,
  refetch,
}: BigCalendarProps) {
  //states
  const [events, setEvents] = useState<Event[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [slotInfo, setSlotInfo] = useState<SlotInfo | null>(null);

  //if trainerAvailability changes, create new events
  useEffect(() => {
    createEventsFromAvailability(trainerAvailability);
  }, [trainerAvailability]);

  const stringToDateConverter = (
    dateString: string,
    trainingTime?: number
  ): Date => {
    // converts this format "2023.12.12.10:00"
    const dateParts = dateString.split(".");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // months are zero-based (0-11)
    const day = parseInt(dateParts[2]);
    const timeParts = dateParts[3].split(":");
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);

    if (trainingTime) {
      return new Date(year, month, day, hour + trainingTime, minute);
    }
    return new Date(year, month, day, hour, minute);
  };

  const createEventsFromAvailability = (
    trainerAvailability: AvailableTime[]
  ): void => {
    const events: Event[] = trainerAvailability.flatMap((availableObj) =>
      availableObj.times.map((time) => ({
        title: <p className="p-1">{`Personal Training ${time}`}</p>,
        start: stringToDateConverter(`${availableObj.day}.${time}`),
        end: stringToDateConverter(`${availableObj.day}.${time}`, 1),
      }))
    );
    setEvents(events);
  };

  const onEventResize: withDragAndDropProps["onEventResize"] = (data) => {
    const { start, end } = data;

    setEvents((currentEvents) => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      };
      return [...currentEvents, firstEvent];
    });
  };

  const onEventDrop: withDragAndDropProps["onEventDrop"] = (data) => {
    console.log(data);
  };

  const selectSlot = (slotInfo: SlotInfo) => {
    if (slotInfo.start < new Date()) return;
    setSlotInfo(slotInfo);
    setOpenModal(true);
  };

  return (
    <div className="relative">
      <BasicModal
        open={openModal}
        handleClose={() => {
          setOpenModal(false);
        }}
        slotInfo={slotInfo}
        refetch={refetch}
      />
      <DnDCalendar
        className="bg-white p-5"
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        onSelectSlot={selectSlot}
        onSelectEvent={(event) => console.log(event)}
        resizable
        selectable
        style={{ height: "100vh" }}
      />
    </div>
  );
}

const locales = {
  "en-US": enUS,
};
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
const now = new Date();
const start = endOfHour(now);
const end = addHours(start, 2);
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
//@ts-ignore
const DnDCalendar = withDragAndDrop(Calendar);
