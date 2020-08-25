import React from "react";
import { ViewContainer } from "./ViewContainer/ViewContainer";

export const Trending = () => {
  const urlProp =
    "https://api.themoviedb.org/3/trending/tv/week?api_key=1a09dcf42c6c621e5b547c2f53c489b3";
  const titleProp = "Trending";
  return (
    <>
      <ViewContainer url={urlProp} title={titleProp} />
    </>
  );
};
