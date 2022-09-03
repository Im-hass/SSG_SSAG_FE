import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://13.209.26.150:9000';

const useAxios = ({ url, method, body = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);
  const token = localStorage.getItem('token');

  const fetchData = () => {
    axios[method](
      url,
      {
        headers: {
          Authorization: JSON.parse(token),
        },
      },
      JSON.parse(body),
    )
      .then((res) => {
        setResponse(res.data.result);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body]);

  return { response, error, loading };
};

export default useAxios;
