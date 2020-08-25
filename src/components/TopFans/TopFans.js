import React from "react";
import { ViewContainer } from "../ViewContainer/ViewContainer";

export const TopFans = () => {
  const urlProp =
    "https://api.themoviedb.org/3/tv/top_rated?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=";
  const titleProp = "Top Rated";

  return (
    <>
      <ViewContainer url={urlProp} title={titleProp} />
    </>
  );
};
