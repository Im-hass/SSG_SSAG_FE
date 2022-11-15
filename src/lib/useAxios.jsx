import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://ssg-ssag.shop:9000';

const useAxios = ({ method, url, body = null, userOrNot = false }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);
  const token = localStorage.getItem('token');
  const isUser = token !== null;

  const fetchData = ({
    reMethod,
    reUrl,
    reBody = null,
    reUserOrNot = false,
    afterThen = null,
  }) => {
    let newUrl = reUrl;
    if (reUserOrNot) newUrl = isUser ? `/users${reUrl}` : `/non-users${reUrl}`;

    axios[reMethod](
      newUrl,
      {
        headers: {
          Authorization: JSON.parse(token),
        },
      },
      JSON.parse(reBody),
    )
      .then((res) => {
        setResponse(res.data.result);
        afterThen(res.data.result);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData({
      reMethod: method,
      reUrl: url,
      reBody: body,
      reUserOrNot: userOrNot,
    });
  }, []);

  return { response, error, loading, fetchData };
};

export default useAxios;
