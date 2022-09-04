import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchAPI = async (url,params) => {
  const { data } = await axios.get(url, {
    params: params,
    headers: {
      "X-RapidAPI-Key": "851c2e8d29msh8785173d362396bp1931cbjsn5ffe97c9c380",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
