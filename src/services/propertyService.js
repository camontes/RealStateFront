import axios from "axios";
import { Api_Url } from "../constants/constants";

const BASE_URL = Api_Url;
export const fetchProperties = async (filters) => {
  const res = await axios.get(BASE_URL, { params: filters });
  return res.data;
};

export const fetchPropertyDetail = async (id) => {
  const res = await axios.get(`${BASE_URL}/PropertyDetail/${id}`);
  return res.data;
};