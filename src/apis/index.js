import axios from "axios";
import { BASE_PATH } from "../config";

export const tapeiPopulation = axios.create({
  baseURL: BASE_PATH,
});
