import React from "react";
import { Link } from "react-router-dom";

export const HomeCardList = (props) => {
  const { color, icon, cap, link } = props;
  return (
    <div
      style={{
        backgroundColor: `white`,
      }}
      className={`sans-serif`}
    >
      <div
        style={{
          backgroundColor: `${color}`,
        }}
        className="w-90 mt3 mw9 center pa4 pt5-ns ph7-l"
      >
        <Link to={`${link}`} className={"no-underline"}>
          <div className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <i
              style={{ color: "white" }}
              className={`${icon}`}
              aria-hidden="true"
            ></i>{" "}
            <span className=" lh-copy white pa1 tracked-tight">{`${cap}`}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
