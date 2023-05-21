import { FaWpexplorer } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleToyCard = ({ toy }) => {
  const {
    _id,
    name,
    picture,
    ageGroup,
    availableQuantity,
  } = toy;

  return (
    <div className="relative">
      <h4 className="text-lg font-semibold text-white py-4">{name}</h4>
      <img
        style={{ width: "100%", height: "10rem", borderRadius: "1rem" }}
        src={picture}
        alt={name}
        className="w-3/4 mx-auto mb-4"
      />

      <p className="my-2">Age Group: {ageGroup}</p>

      <p>Available Quantity: {availableQuantity}</p>

      <Link
        to={`/toydetails/${_id}`}
        className="absolute bottom-0 right-0 transform  bg-slate-700 text-success px-4  rounded-md "
      >
        <FaWpexplorer></FaWpexplorer> view Details
      </Link>
    </div>
  );
};

export default SingleToyCard;
