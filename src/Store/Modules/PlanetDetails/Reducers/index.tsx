import {Reducer} from 'redux';
import {IPlanetsDetails} from '../Types';

const INITIAL_STATE: IPlanetsDetails = {
  planet_id: '0',
};

const PlanetDetailsId: Reducer<IPlanetsDetails | any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'PLANETS': {
      const {planet_id} = action.payload;
      return {
        ...state,
        planet_id,
      };
    }
    default: {
      return state;
    }
  }
};

export default PlanetDetailsId;
