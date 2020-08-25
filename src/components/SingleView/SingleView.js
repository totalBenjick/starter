import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./index.module.sass";
import { favReducer } from "../../hooks/favoriteShow";

export const SingleView = () => {
  // Hook to get id from params
  let { id } = useParams();

  // Retrieve show info
  let getTVSeries = `https://api.themoviedb.org/3/tv/${id}?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US`;
  // eslint-disable-next-line
  const { loading, data } = useFetch(getTVSeries);
  const genres = data?.genres;

  // Reducer to manage favorites and localStorage
  const init = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };
  const [favorites, dispatch] = useReducer(favReducer, [], init);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Image variables
  let img = data?.backdrop_path || data?.poster_path;
  let imgLink = `https://image.tmdb.org/t/p/w400/${img}`;

  // Handle add or remove favorite series
  const handleHeartClick = (e) => {
    e.preventDefault();

    if (favorites.includes(id)) {
      dispatch({
        type: "delete",
        payload: id,
      });
      return;
    }

    dispatch({
      type: "add",
      payload: id,
    });
  };

  let heart = (favorites.includes(id) && "fa fa-heart ") || "fa fa-heart-o";

  const mapGenre = genres?.map((e, i) => e.name);
  const genresToDisplay = mapGenre?.join(", ");
  return (
    <div>
      <div className=" helvetica  w-95 pr2-l pl2-ns mb0-l shadow-3 ma2">
        <div className="pa4">
          <img
            src={`${imgLink}`}
            alt={` tv series app`}
            className="w-100 db black-10 br2"
          />
          <div className={`flex flex-row justify-center`}>
            <i
              className={`${heart} ${styles.heart} self-center red`}
              onClick={handleHeartClick}
              aria-hidden="true"
            ></i>
            <h1 className="f4 f2-l fw7 mt0 pt3 pl3 mid-gray pv3-l dib ">
              {data?.name}
            </h1>
          </div>
          <h1 className="f5 f2-l fw7 mt0 pv3-l dark-blue">
            {data?.number_of_episodes} Episodes
          </h1>
          <p className="lh-copy mt2 mt3-m mt5-l f6">
            <span className="db-ns f7 fw7 lh-solid mb3 mb0-m mb4-l">
              {genresToDisplay}
            </span>
            <br></br>
            <span className="db-l measure-wide navy">{data?.overview}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
