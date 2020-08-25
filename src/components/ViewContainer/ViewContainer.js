import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CardItem } from "../CardItem";
import styles from "./index.module.sass";
import { dynamicSort } from "../../utils/dynamicSort";

export const ViewContainer = (props) => {
  // Hooks that manage state
  const [page, setPage] = useState(1);
  const [sorted, setSort] = useState([]);

  //Get most popular shows
  const getSeries = `${props.url}${page}`;

  const { loading, data } = useFetch(getSeries);

  const results = data?.results || [];

  useEffect(() => {
    setSort(results);
  }, [data]);

  //  vote_average
  const sortedByAZ = [...results].sort(dynamicSort("name"));
  const sortedByZA = [...results].sort(dynamicSort("-name"));

  console.log(sorted);

  const MapResults = () =>
    sorted.map((e, i) => (
      <CardItem
        key={i}
        img={e?.poster_path}
        showName={e?.name}
        averageVote={e?.vote_average}
        id={e?.id}
      />
    ));

  return (
    <>
      <div className="flex flex-row justify-around h3">
        <span className=" lh-copy black pa1 tracked-tight sans-serif ma3 f2 mt1">
          {props.title}
        </span>
        <span
          onClick={() => {
            setSort(sortedByAZ);
          }}
          className=" self-center mt1 shadow-hover"
        >
          <i
            className="fa fa-sort-alpha-asc grow pa3 br2 bg-orange white dib"
            aria-hidden="true"
          ></i>
        </span>
        <span
          onClick={() => {
            setSort(sortedByZA);
          }}
          className=" self-center mt1 shadow-hover"
        >
          <i
            className="fa fa-sort-alpha-desc grow pa3 br2 bg-blue white dib"
            aria-hidden="true"
          ></i>
        </span>
      </div>
      <div className={`${styles.main_container}`}>
        <MapResults />
      </div>
    </>
  );
};
