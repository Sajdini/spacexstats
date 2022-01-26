import { useState, useEffect } from "react";

const useFetch = (link) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    try {
      async function fetchData() {
        const res = await fetch(link);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      }
      fetchData();
    } catch (error) {
      setError(true);
    }
  }, [setData, link]);

  return { data, error, isLoading };
};

export default useFetch;
