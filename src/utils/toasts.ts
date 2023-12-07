import { toast } from "react-toastify";
export const errorToast = (errorMessage: string): React.ReactNode => {
  return toast.error(errorMessage, {
    theme: "dark",
    autoClose: 3000,
    pauseOnHover: false,
    closeOnClick: true,
    hideProgressBar: true,
  });
};

export const successToast = (successMessage: string): React.ReactNode => {
  return toast.success(successMessage, {
    theme: "dark",
    autoClose: 4000,
    pauseOnHover: false,
    closeOnClick: true,
    hideProgressBar: false,
  });
};
