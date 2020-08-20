import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { CardItem } from "./CardItem";

export const MostWatched = () => {
  const [page, setPage] = useState(2);
  //Get most popular shows
  const getSeries = `https://api.themoviedb.org/3/tv/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=${page}`;

  const { loading, data } = useFetch(getSeries);

  const results = data?.results || [];

  const MapResults = () =>
    results.map((e, i) => (
      <CardItem
        key={i}
        img={e?.poster_path}
        showName={e?.name}
        averageVote={e?.vote_average}
      />
    ));

  // const first = results?.[0];
  // const urlToImage = first?.poster_path;
  // const showName = first?.name;
  // const averageVote = first?.vote_average;
  // let img = `https://image.tmdb.org/t/p/w500/${urlToImage}`;
  // console.log(loading, results, first, urlToImage, img);

  return (
    <>
      <span className=" lh-copy black pa1 tracked-tight sans-serif ma3 f2 mt5">{`Most Watched`}</span>
      <MapResults />
    </>
  );
};
