type Booking = {
  date: string;
  time: string;
  trainingType: string;
  trainingPrice?: number;
};

type BookingResponse = {
  bookings: Booking[];
  bookingsToday: Booking[];
  bookingsLength?: number;
  bookingsTodayLength?: number;
};

export type { Booking, BookingResponse };
