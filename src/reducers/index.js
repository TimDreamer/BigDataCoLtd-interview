import {
  LOAD_SITES,
  LOAD_HOUSEHOLD,
  SET_YEAR,
  CHANGE_SELECTED,
} from "../config";

const initstate = {
  sites: [],
  taipeiPopulation: [],
  year: 106,
  selected: "",
};

export const taipeiPopulationReducer = (state = initstate, action) => {
  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload };
    case LOAD_SITES:
      return { ...state, sites: action.payload };
    case LOAD_HOUSEHOLD:
      return { ...state, taipeiPopulation: action.payload };
    case CHANGE_SELECTED:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default taipeiPopulationReducer;
