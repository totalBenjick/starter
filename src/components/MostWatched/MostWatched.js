import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CardItem } from "../CardItem";
import styles from './index.module.sass'

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

  return (
    <>
      <span className=" lh-copy black pa1 tracked-tight sans-serif ma3 f2 mt5 ">{`Most Watched`}</span>
      <div className={`${styles.main_container}`}> 
        <MapResults />
      </div>
    </>
  );
};
