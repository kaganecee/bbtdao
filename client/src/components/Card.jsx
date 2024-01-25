import React from "react";
import PropTypes from "prop-types";

const Card = ({ imageSrc, title }) => {
  const handleCardClick = () => {};

  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-md m-4 cursor-pointer border-inherit border-2 transition-transform transform hover:scale-105 hover:shadow-xl"
        onClick={handleCardClick}
      >
        <div className="px-6 py-4 card-bg">
          <img
            className="h-40 w-40 p-8 object-center"
            src={imageSrc}
            alt="Card"
          />
        </div>
      </div>
      <div className="font-bold tracking-widest text-center text-xl mb-2 comfortaa cards-font-color transition-opacity hover:opacity-75">
        {title}
      </div>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
