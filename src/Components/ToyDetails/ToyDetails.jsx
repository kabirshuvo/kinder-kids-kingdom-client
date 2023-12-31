import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const loadedToy = useLoaderData();

  const {
    _id,
    name,
    picture,
    ageGroup,
    price,
    rating,
    sellerName,
    description,
    category,
    subcategory,
    availableQuantity,
    shipping,
  } = loadedToy;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-slate-700 rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="text-success">Rating: {rating}</div>
        </div>
        <div className="flex">
          <img
            src={picture}
            alt={name}
            className="w-1/2 rounded-lg object-cover mr-8"
          />
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="font-semibold">Age Group:</span> {ageGroup}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Price:</span> {price}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Seller:</span> {sellerName}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Description:</span> {description}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Category:</span> {category}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Subcategory:</span> {subcategory}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Available Quantity:</span>{" "}
              {availableQuantity}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Shipping:</span>{" "}
              {`${shipping?.method}`} <br />
              <small className="text-success">{`${shipping?.time}`}</small>
            </div>
            <Link to={`/gettoy/${_id}`} className="btn btn-primary">
              Get the Toy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
