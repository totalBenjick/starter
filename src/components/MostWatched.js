import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { CardItem } from "./CardItem";

export const MostWatched = () => {
  const [page, setPage] = useState(1);
  //Get most popular shows
  const getSeries = `https://api.themoviedb.org/3/tv/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=${page}`;

  const { loading, data } = useFetch(getSeries);

  const results = data?.results || [];
  console.log(results);

  /**
   * Function to sort alphabetically an array of objects by some specific key.
   *
   * @param {String} property Key of the object to sort.
   */
  const dynamicSort = (property) => {
    var sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  };

  const results_noModified = [...results];

  const sortedAlphabetically = results_noModified.sort(
    dynamicSort("original_name")
  );

  console.log(sortedAlphabetically);

  const MapResults = () =>
    results.map((e, i) => (
      <CardItem
        key={i}
        img={e?.poster_path}
        showName={e?.name}
        averageVote={e?.vote_average}
      />
    ));

  return (
    <>
      <span className=" lh-copy black pa1 tracked-tight sans-serif ma3 f2 mt5">{`Most Watched`}</span>
      <MapResults />
    </>
  );
};
