//GET request
import axios from "axios";
import { successToast, errorToast } from "./toasts";

export const get = async (url: string) => {
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
    if (log) {
      console.log("RESPONSE: ", res);
    }
    if (res.message) {
      successToast(res.message);
    } else {
      successToast(successMessage);
    }
    return res;
  } catch (error: any) {
    console.log(error);
    if (error.response.data.message) {
      errorToast(error.response.data.message);
    } else {
      errorToast(errorMessage);
    }
    return error;
  }
};
