import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CardItem } from "../CardItem";
import styles from "./index.module.sass";
import { dynamicSort } from "../../utils/dynamicSort";
import { useParams, Link } from "react-router-dom";

export const ViewContainer = (props) => {
  // Hooks that manage state
  const [sorted, setSort] = useState([]);

  //Hook to get page
  let { page } = useParams();

  if (page === undefined || page === 0) {
    page = 1;
  }

  //Get most popular shows
  let getSeries =
    (props.title === "Trending" && `${props.url}`) || `${props.url}${page}`;
  // eslint-disable-next-line
  const { loading, data } = useFetch(getSeries);
  const results = data?.results || [];

  const totalPages = data?.total_pages || 0;

  useEffect(() => {
    setSort(results);
    // eslint-disable-next-line
  }, [data]);

  //  vote_average
  const sortedByAZ = [...results].sort(dynamicSort("name"));
  const sortedByZA = [...results].sort(dynamicSort("-name"));

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

  let pageNumber = parseInt(page, 10);

  const pathName = window.location.pathname;

  const sub_path = pathName.substring(0, pathName.lastIndexOf("/") + 1);

  const goodRedirect_previous =
    (pageNumber === 1 && `${sub_path}1`) || `${sub_path}${pageNumber - 1}`;

  const goodRedirect_next =
    (pageNumber === totalPages && `${sub_path}1`) ||
    `${sub_path}${pageNumber + 1}`;

  console.log(sub_path, goodRedirect_previous, goodRedirect_next);

  return (
    <>
      <div className="flex flex-row justify-around h3">
        <div>
          <span className=" lh-copy black pa1 tracked-tight sans-serif ma3 f2 mt1 ma1">
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
            className=" self-center mt1 shadow-hover ma1"
          >
            <i
              className="fa fa-sort-alpha-desc grow pa3 br2 bg-blue white dib"
              aria-hidden="true"
            ></i>
          </span>
        </div>
      </div>
      <div className={`${styles.main_container}`}>
        <MapResults />
        <div className="ma4">
          <Link
            to={goodRedirect_previous}
            className="fa fa-caret-left grow pa3 br2 bg-blue white dib"
            aria-hidden="true"
          />
          <span className="ma5">{page}</span>
          <Link
            to={goodRedirect_next}
            className="fa fa-caret-right grow pa3 br2 bg-blue white dib"
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
};
