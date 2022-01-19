export interface IPlanet {
  id?: string;
  name: string;
  image: string;
  size: string;
  temperature: string;
}

export interface IDetails {
  image?: string;
  name: string;
  curiosity: string;
  distance_sun: string;
  duration_day: string;
  orbital_period: string;
}
