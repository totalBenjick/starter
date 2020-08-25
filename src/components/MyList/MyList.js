import React, { useEffect, useReducer, useState } from "react";
import { favReducer } from "../../hooks/favoriteShow";
import { useFetch } from "../../hooks/useFetch";

export const MyList = () => {
  // setState
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  // Reducer to manage favorites and localStorage
  const init = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };
  const [favorites, dispatch] = useReducer(favReducer, [], init);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  console.log(favorites);

  const mapFavArray = () =>
    favorites.map((e, i) => {
      fetch(
        `https://api.themoviedb.org/3/tv/${e}?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setState({
            loading: false,
            error: null,
            data,
          });
        });
    });

  useEffect(() => {
    mapFavArray();
  }, [favorites]);

  console.log(state);
  return (
    <div>
      <div>{favorites}</div>

      <div className="pa4 helvetica">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellspacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white dark-blue">
                  Name
                </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white dark-blue">
                  Genre
                </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white red">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr>
                <td className="pv3 pr3 bb b--black-20">
                  Tv show name very long
                </td>
                <td className="pv3 pr3 bb b--black-20">Genre</td>
                <td className="pv3 pr3 bb b--black-20">Icon to delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
