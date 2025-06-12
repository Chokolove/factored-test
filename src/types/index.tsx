export interface Item {
  name: string;
  icon: "film" | "users" | "home";
  url?: string;
}
export interface StarWarsFilm {
  _id: string;
  uid: string;
  __v: number;
  description: string;
  properties: {
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
  };
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
