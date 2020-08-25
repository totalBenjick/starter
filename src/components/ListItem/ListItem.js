import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { favReducer } from "../../hooks/favoriteShow";

export const ListItem = (props) => {
  let id = props.id;

  // Reducer to manage favorites and localStorage
  const init = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };
  const [favorites, dispatch] = useReducer(favReducer, [], init);

  // eslint-disable-next-line
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const [data, setState] = useState({});
  // eslint-disable-next-line
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          data,
        });
      });
    // eslint-disable-next-line
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch({
      type: "delete",
      payload: id,
    });
    window.location.href = "/favorites";
  };

  return (
    <tr>
      <Link
        className={" black fw5 no-underline  bb b--black-20 db"}
        to={`/tv/${id}`}
      >
        <td className="pv3 pr3  w-90">{data.data?.name}</td>
      </Link>
      <td className="pv3 pr3 bb b--black-20">{data.data?.vote_average}</td>
      <td className="pv3 pr3 bb b--black-20">
        <i onClick={handleDelete} className="fa fa-trash red shadow-hover"></i>
      </td>
    </tr>
  );
};
