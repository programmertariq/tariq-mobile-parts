import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const Review = ({ review: { name, text, rating } }) => {
  return (
    <div className="review bg-base-200 p-6 rounded-xl shadow-lg">
      <div className="review-header flex gap-3 items-center">
        <div className="review-img-container w-16 h-16 rounded-full bg-gray-600 flex items-center content-center p-2">
          <img
            className="w-full rounded-full"
            src="https://i.ibb.co/hDP6fYq/user.png"
            alt=""
          />{" "}
        </div>
        <h4 className="text-xl">{name}</h4>
      </div>
      <div className="review-body mt-3">
        <div>
          <Rating readonly initialRating={rating} />
        </div>
        <p>{text.slice(0, 30)}...</p>
      </div>
      <div className="review-footer flex justify-end">
        <FontAwesomeIcon
          className="text-xl text-accent"
          icon={faArrowRightLong}
        />
      </div>
    </div>
  );
};

export default Review;
