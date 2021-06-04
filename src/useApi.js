import { useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setLoading(false);
        setData(json);
      });
  };

  useEffect(() => {
    if (url) {
      fetchApi();
    }
  }, [url]);

  return { loading, data };
};

export default useApi;
