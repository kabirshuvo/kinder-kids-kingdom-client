import { FaWpexplorer } from 'react-icons/fa';



const SingleToyCard = ({toy}) => {

const {name, picture, ageGroup, price, rating, sellerName, description, category, subcategory, availableQuantity} = toy

  return (
    <div className="relative">
      
      <h4 className="text-lg font-semibold text-white py-4">{name}</h4>
      <img
        style={{ width: "100%", height: "10rem", borderRadius: "1rem" }}
        src={picture}
        alt={name}
        className="w-3/4 mx-auto mb-4"
      />
      {/* <p className="mt-2">Price: ${toy.price}</p> */}
      {/* <p>Rating: {toy.rating}</p> */}
      <p className="my-2">Age Group: {ageGroup}</p>
      {/* <p>Description: {toy.description}</p> */}
      {/* <p>Seller: {toy.sellerName}</p> */}
      {/* <p>Category: {toy.category}</p> */}
      {/* <p>Subcategory: {toy.subcategory}</p> */}
      <p>Available Quantity: {availableQuantity}</p>
      {/* <p>Shipping Method: {toy.shipping.method}</p> */}
      {/* <p>Shipping Time: {toy.shipping.time}</p> */}
      <button className="absolute bottom-0 right-0 transform  bg-primary text-white px-4 py-2 rounded-md">
        <FaWpexplorer></FaWpexplorer>
      </button>
    </div>
  );
};

export default SingleToyCard;
