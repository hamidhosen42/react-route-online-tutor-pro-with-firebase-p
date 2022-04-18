import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h1 className="text-primary text-center mt-3">Student Reviews</h1>
      <div className="container services-container mt-5">
        {reviews.map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;