import axios, { AxiosResponse } from "axios";
import { API_URLS } from "shared/config/APIurls";

export const getDogsByBreed = ( breed: string, amount: number ): Promise<AxiosResponse<any>> => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const URL = `${API_URLS.dogsList}${breed}images/random/${amount}`;
    return axios.get(URL, {
      headers,
    });
  };