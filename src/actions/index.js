import { tapeiPopulation } from "../apis";
import {
  LOAD_SITES,
  LOAD_HOUSEHOLD,
  SET_YEAR,
  CHANGE_SELECTED,
} from "../config";

const setYear = (newYear) => ({
  type: SET_YEAR,
  payload: newYear,
});

const loadSites = (sites) => ({
  type: LOAD_SITES,
  payload: sites,
});

const loadHousehold = (data) => ({
  type: LOAD_HOUSEHOLD,
  payload: data,
});

export const changeSelect = (selected) => {
  return {
    type: CHANGE_SELECTED,
    payload: selected,
  };
};

// need Optimization
// Error handling
export const loadDB = () => async (dispatch) => {
  const res = await tapeiPopulation.get();
  const data = res.data.responseData;

  data?.[0]?.["statistic_yyy"] && dispatch(setYear(data[0]["statistic_yyy"]));

  const sites = [
    ...data.reduce((acc, entry) => {
      // need to change when using URL API

      entry["site_id"].startsWith("臺北") && acc.add(entry["site_id"]);
      return acc;
    }, new Set()),
  ];

  dispatch(changeSelect(sites[0] || ""));
  dispatch(loadSites(sites));

  let initData = Array.from({ length: sites.length }).map((_) => ({
    household_single: { m: 0, f: 0 },
    household_ordinary: { m: 0, f: 0 },
  }));

  const payload = data.reduce((acc, entry) => {
    const idx = sites.findIndex((site) => site === entry["site_id"]);
    if (idx >= 0) {
      acc[idx]["household_ordinary"].m += +entry.household_ordinary_m;
      acc[idx]["household_ordinary"].f += +entry.household_ordinary_f;
      acc[idx]["household_single"].m += +entry.household_single_m;
      acc[idx]["household_single"].f += +entry.household_single_f;
    }
    return acc;
  }, initData);

  dispatch(loadHousehold(payload));
};
