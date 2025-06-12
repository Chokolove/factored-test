export interface Item {
  name: string;
  icon: "film" | "users" | "home" | "ship";
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

export interface PersonProperties {
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
export interface StarshipProperties {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  starship_class: string;
  url: string;
}
export interface Entity<T = PersonProperties | StarshipProperties> {
  uid: string;
  _id: string;
  __v: number;
  description: string;
  url?: string;
  properties: T;
}

export interface ApiWithPaginationResponse<T> {
  apiVersion: string;
  message: string;
  next: string | null;
  previous: string | null;
  results: Entity<T>[];
  result: Entity<T>[];
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
