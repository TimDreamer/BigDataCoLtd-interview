import axios from "axios";
import { TAIPEI_POPULATION } from "../config";

export const tapeiPopulation = axios.create({
  baseURL: TAIPEI_POPULATION,
});
