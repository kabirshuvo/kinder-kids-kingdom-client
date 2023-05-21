import { Link } from "react-router-dom";


const ScienceandExploreCard = ({toy}) => {
    const { _id, name, picture, ageGroup, availableQuantity } = toy;
  
    return (
      <div className="w-full p-2">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={picture}
            alt={name}
            className="w-full h-24 sm:h-32 object-cover object-center"
          />
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-medium mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">Age Group: {ageGroup}</p>
            <p className="text-gray-600 mb-2">
              Available Quantity: {availableQuantity}
            </p>
            <Link to={`/toydetails/${_id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ScienceandExploreCard;