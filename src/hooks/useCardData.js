import { useEffect, useState } from 'react';

export default function useCardData(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/10`,
      { signal }
    )
      .then((response) => response.json())
      .then((res) => {
        setUserData((prevCards) => {
          return [...prevCards, ...res.list];
        });
        setHasMore(res.list.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (e.name === 'AbortError') {
          console.log('Abort Error');
        } else {
          console.log(e);
          setError(true);
        }
      });
    return () => controller.abort();
  }, [pageNumber]);

  return { loading, error, userData, hasMore };
}
