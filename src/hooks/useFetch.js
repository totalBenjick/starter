import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useFetch = (url) => {
  const { setLoading } = useContext(UserContext);
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // eslint-disable-next-line
  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    setLoading(true);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
        setLoading(false);
      });
    // eslint-disable-next-line
  }, [url]);

  return state;
};
