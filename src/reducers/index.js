import { LOAD_SITES, LOAD_HOUSEHOLD, CHANGE_SELECTED } from "../config";

const initstate = {
  sites: [],
  taipeiPopulation: [],
  selected: "",
};

export const taipeiPopulationReducer = (state = initstate, action) => {
  switch (action.type) {
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
