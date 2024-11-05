import { useEffect, useState } from "react";

export const useData = (options) => {
  const [data, setData] = useState(() => {
    const localStorageData = localStorage.getItem("data");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (!data.length) {
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    }
  }, [data.length, options.url]);

  const addMeetup = (item) => {
    setData((prevData) => [...prevData, item]);
  };

  return {
    data,
    addMeetup,
  };
};
