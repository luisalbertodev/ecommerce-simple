import axios from "axios";
import { BASE_URL } from "../constant";

const headers = {
  // "content-type": "application/json",
  // "Access-Control-Allow-Origin": "*",
};

export const fetchBackend = async ({ method = "get", url, data }) => {
  try {
    const endpoint = `${BASE_URL}/${url}`;
    const response = await axios({
      url: endpoint,
      method,
      data,
      headers,
    });

    return { error: false, response: response.data };
  } catch (response) {
    return { error: true, response: response.data };
  }
};
