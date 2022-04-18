import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = (props) => {
  const { name, img, title, rating } = props.review;
  return (
    <div className="service" style={{height:"350px"}}>
      <img className="w-100 h-50" src={img} alt="" />
      <h3 className="mt-3">Name : {name}</h3>
      <p>
        <small>{title}</small>
      </p>
      <Rating
        initialRating={rating}
        emptySymbol={<FontAwesomeIcon icon={faStar} />}
        fullSymbol={
          <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
        }
        readonly
      ></Rating>
    </div>
  );
};

export default Review;