import React, { useEffect, useReducer } from "react";
import { favReducer } from "../../hooks/favoriteShow";
import { ListItem } from "../ListItem/ListItem";

export const MyList = () => {
  // Reducer to manage favorites and localStorage
  const init = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };
  const [favorites] = useReducer(favReducer, [], init);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const MapFavArray = () =>
    favorites.map((e, i) => <ListItem id={e} key={i} />);

  useEffect(() => {
    MapFavArray();
    // eslint-disable-next-line
  }, [favorites]);

  return (
    <div>
      {favorites.length === 0 && (
        <span className=" lh-copy black pa1 tracked-tight sans-serif ma3 f5 mt1 ml7">
          <div
            className={`ml5 mb3 `}
          >{`Please add a show to your favorites  :)`}</div>
        </span>
      )}
      <div className="tracked-tight sans-serif ml5 mt3 f3">
        {"Liked Series"}
      </div>
      <div className="pa4 helvetica">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellspacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white dark-blue">
                  Name
                </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white dark-blue">
                  Average Vote
                </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white dark-blue">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <MapFavArray />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
