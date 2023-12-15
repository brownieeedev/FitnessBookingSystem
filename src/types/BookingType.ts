type Booking = {
  _id?: string;
  date: string;
  time: string;
  paid: boolean;
  trainingType: "online" | "inperson";
  location?: string;
  trainingPrice?: number;
};

type BookingResponse = {
  bookings: Booking[];
  bookingsToday: Booking[];
  bookingsLength?: number;
  bookingsTodayLength?: number;
  onlineTrainingsLength?: number;
  inpersonTrainingsLength?: number;
};

export type { Booking, BookingResponse };
