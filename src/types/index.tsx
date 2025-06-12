export interface Item {
  name: string;
  icon: "film" | "users" | "home";
  url?: string;
}
interface filmProperty {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
  opening_crawl: string;
  url: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
}
export interface StarWarsFilm {
  _id: string;
  uid: string;
  __v: number;
  description: string;
  properties: filmProperty;
}

export interface FilmsApiResponse {
  apiVersion: string;
  message: string;
  result: StarWarsFilm[];
  social: {
    discord: string;
    reddit: string;
    github: string;
  };
  support: {
    contact: string;
    donate: string;
    partnerDiscounts: Record<string, unknown>;
  };
  timestamp: string;
}

interface PersonProperties {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  url: string;
}
export interface Person {
  uid: string;
  _id: string;
  __v: number;
  description: string;
  url: string;
  properties: PersonProperties;
}

export interface PeopleApiResponse {
  apiVersion: string;
  message: string;
  next: string | null;
  previous: string | null;
  results: Person[];
  result: Person[];
  social: {
    discord: string;
    reddit: string;
    github: string;
  };
  support: {
    contact: string;
    donate: string;
    partnerDiscounts: {
      [key: string]: string;
    };
  };
  timestamp: string;
  total_pages: number;
  total_records: number;
}
