//GET request
import axios from "axios";
import { toastSuccess, toastError } from "./toasts";

export const axiosGet = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const axiosPost = async (url: string, data: object) => {
  const response = await axios.post(url, data);
  return response.data;
};

export const axiosPostLoginAndSignup = async (
  url: string,
  data: object,
  log: boolean = false,
  successMessage: string,
  errorMessage: string
) => {
  try {
    const res = await axiosPost(url, data);
    if (log) console.log("RESPONSE: ", res);

    if (res.message) {
      toastSuccess(res.message);
    } else {
      toastSuccess(successMessage);
    }
    return res;
  } catch (error: any) {
    if (log) console.log(error);
    if (error.response.data.message) {
      toastError(error.response.data.message);
    } else {
      toastError(errorMessage);
    }
    return error;
  }
};
