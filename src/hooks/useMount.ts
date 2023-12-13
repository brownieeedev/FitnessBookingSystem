import { useEffect } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useUnMount = (callback: () => void) => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
};
