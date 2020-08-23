import React from "react";
import { colors } from "../utils/variables";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <header
      style={{
        backgroundColor: `${colors.header}`,
      }}
      className={`sans-serif w-100`}
    >
      <div className="w-100 center pa4 pt5-ns">
        <div className="f2  w-100 lh-title mv0 inline-flex justify-between content-center">
          <div className=" lh-copy white pa1 tracked-tight">
            {" "}
            <Link to={"/"} className={"no-underline white"}>
              <img
                className={`w2 `}
                alt={"tv react series app"}
                src={`//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`}
              />{" "}
              TV Series App
            </Link>
          </div>
          <Link to={"/"} className={"no-underline self-center"}>
            <i className="fa fa-bars white self-center" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};
