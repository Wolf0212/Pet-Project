import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue?: unknown) => {
  const [value, setValue] = useState<unknown>(
    localStorage.getItem(key) ?? String(defaultValue)
  );

  useEffect(() => {
    localStorage.setItem(key, String(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
