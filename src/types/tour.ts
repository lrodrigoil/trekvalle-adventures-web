export interface Tour {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery?: string[];
  duration: string;
  difficulty: "Fácil" | "Media" | "Difícil";
  price: number;
  category: string;
  includes: string[];
  whatToBring: string[];
  itinerary: {
    time: string;
    activity: string;
  }[];
  guide: {
    name: string;
    photo: string;
    experience: string;
  };
  availableDates: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  tourId: string;
  date: string;
  numberOfPeople: number;
  comments: string;
}
