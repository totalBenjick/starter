import React from "react";
import { ViewContainer } from "../ViewContainer/ViewContainer";

export const MostWatched = () => {
  const urlProp =
    "https://api.themoviedb.org/3/tv/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=";
  const titleProp = "Most Watched";

  return (
    <>
      <ViewContainer url={urlProp} title={titleProp} />
    </>
  );
};
