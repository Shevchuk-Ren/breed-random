import axios, { AxiosResponse } from "axios";
import { API_URLS } from "shared/config/APIurls";

export const getRandomDog = (): Promise<AxiosResponse<any>> => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return axios.get(API_URLS.randomDog, {
      headers,
    });
  };