import { useState, useEffect } from "react";

const useLocalStorage = <T,>(
  key: string,
  initialValue: string
): [T, React.Dispatch<T>] => {
  const [value, setValue] = useState<T>(() => {
    return JSON.parse(localStorage.getItem(key) || initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
