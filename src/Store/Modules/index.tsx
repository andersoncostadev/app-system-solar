import {createStore, combineReducers} from 'redux';
import PlanetDetailsId from './PlanetDetails/Reducers';
import {IPlanetsDetails} from './PlanetDetails/Types';

export interface IRootPlanet {
  PlanetDetailsId: IPlanetsDetails;
}

const combineStore = combineReducers({PlanetDetailsId});

const store = createStore(combineStore);

export default store;
