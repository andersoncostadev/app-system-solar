import {IPlanetsDetails} from '../Types';

export default function detailsPlanet(planetId: IPlanetsDetails) {
  return {
    type: 'PLANETS',
    payload: planetId,
  };
}
