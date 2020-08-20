import React from "react";

export const CardItem = (props) => {
  const { img, showName, averageVote } = props;
  let imgLink = `https://image.tmdb.org/t/p/w500/${img}`;

  if (img === null || showName === null || averageVote === null) {
    return <div></div>;
  }

  return (
    <>
      <div className="flex shadow-5 items-center justify-center ma3 ba b--black ba br2 black-70 no-underline grow b inline-flex items-center mb3 pv2 ph3">
        <div className=" sans-serif w-90 flex-column items-center justify-center">
          <a href={``} className="db link dim tc">
            <img
              src={`${imgLink}`}
              alt={`${showName} tv series app`}
              className="w-100 db outline black-10 br2"
            />
            <dl className="mt2 f6 lh-copy">
              <dd className="ml0 black truncate w-100">{showName}</dd>
              <dd className="ml0 dark-blue truncate w-100">{averageVote}</dd>
            </dl>
          </a>
        </div>
      </div>
    </>
  );
};
