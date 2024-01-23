import PropTypes from "prop-types";

const Card = ({ imageSrc, title, cardHeight }) => {
  const handleCardClick = () => {};

  return (
    <>
      <div
        className="bg-white shadow-lg rounded-md m-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
        onClick={handleCardClick}
      >
        <div className="px-6 py-4 card-bg">
          <img
            height="100"
            className="h-10 w-40 p-8 object-cover object-center"
            src={imageSrc}
            alt="Card"
          />
        </div>
      </div>
      <div className="font-bold text-center text-xl mb-2 comfortaa font-color transition-opacity hover:opacity-75">
        {title}
      </div>
    </>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardHeight: PropTypes.string.isRequired,
};

export default Card;
