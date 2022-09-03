import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://13.209.26.150:9000';

const useAxios = ({ method, url, body = null, userOrNot = false }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);
  const token = localStorage.getItem('token');
  const isUser = token !== null;

  const fetchData = () => {
    let newUrl = url;
    if (userOrNot) newUrl = isUser ? `/users${url}` : `/non-users${url}`;
    console.log(newUrl);

    axios[method](
      newUrl,
      {
        headers: {
          Authorization: JSON.parse(token),
        },
      },
      JSON.parse(body),
    )
      .then((res) => {
        console.log(res);
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
