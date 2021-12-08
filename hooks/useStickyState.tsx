// https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
import { useState, useEffect } from "react";

const useStickyState = (defaultValue: any, key: string) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);

    return stickyValue === null ? defaultValue : JSON.parse(stickyValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStickyState;
