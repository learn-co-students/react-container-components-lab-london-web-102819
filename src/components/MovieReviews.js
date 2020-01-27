// Code MovieReviews Here
import React from "react";

const Review = ({ display_title, opening_date, headline, link }) => {
  return (
    <div className="review" key={display_title}>
      <h2 className="title"> {display_title} </h2>
      <a href={link.url}> Link to Movie </a>
      <h3 className="opening-date"> {opening_date} </h3>
      <p className="headline"> {headline}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">{reviews.map(Review)}</div>;
};

MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews;
