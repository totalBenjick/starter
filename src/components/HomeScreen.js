import React from "react";
import { HomeCardList } from "./CardList";
import { listColors } from "../utils/variables";

export const HomeScreen = () => {
  const { _0, _1, _2, _3 } = listColors;

  const categoryArray = [
    {
      color: _0,
      icon: "fa fa-fire",
      cap: "Most Pop",
      link: "/mostwatched/1",
    },
    {
      color: _1,
      icon: "fa fa-heart-o",
      cap: "+ Fans",
      link: "/topfans/1",
    },
    {
      color: _2,
      icon: "fa fa-clock-o",
      cap: "Top Now",
      link: "/trending/1",
    },
    {
      color: _3,
      icon: "fa fa-list-ul",
      cap: "My List",
      link: "/favorites",
    },
  ];

  const RenderList = () =>
    categoryArray.map((e, i) => (
      <HomeCardList
        key={i}
        color={e.color}
        icon={e.icon}
        cap={e.cap}
        link={e.link}
      />
    ));

  return (
    <>
      <RenderList />
    </>
  );
};
