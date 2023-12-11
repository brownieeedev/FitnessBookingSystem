type Links = {
  name: string;
  link: string;
  iconLink: string;
};

export type ShortTrainerType = {
  firstname: string;
  trainingTypes: string[];
  links: Links[];
  profilePicture: string;
};

type AvailableTime = {
  day: string;
  times: string[];
};

export type TrainerType = {
  _id: string;
  firstname: string;
  lastname?: string;
  email: string;
  dateOfBirth?: string;
  phone: string;
  sex?: "Male" | "Female";
  available: AvailableTime[];
  introduction: string;
  profilePicture?: string;
  introVideo?: string;
  trainingTypes?: string[];
  places: string[];
  links: Links[];
};
