import { useEffect, useState } from 'react';
import useTitle from '../../hooks/usTitle';

const Alltoys = () => {
    useTitle('k3 || All Toys');
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    const fetchToysData = async () => {
      try {
        const response = await fetch('/allToys.json');
        const data = await response.json();
        setToysData(data);
      } catch (error) {
        console.error('Error fetching toy data:', error);
      }
    };

    fetchToysData();
  }, []);

  return (
    <>
    <div className="grid grid-cols-3 gap-4">
      <h3 className="col-span-3 text-center text-3xl font-bold py-7"> Toys Are Here</h3>
      {toysData.map((toy) => (
        <div key={toy.id} className="relative bg-slate-700 p-4 shadow-md rounded-lg">
          <h4 className="text-lg font-semibold text-white py-4">{toy.name}</h4>
          <img style={{width: '100%', height: '10rem', borderRadius: '1rem'}} src={toy.picture} alt={toy.name} className="w-3/4 mx-auto mb-4" />
          {/* <p className="mt-2">Price: ${toy.price}</p> */}
          {/* <p>Rating: {toy.rating}</p> */}
          <p className='my-2'>Age Group: {toy.ageGroup}</p>
          {/* <p>Description: {toy.description}</p> */}
          {/* <p>Seller: {toy.sellerName}</p> */}
          {/* <p>Category: {toy.category}</p> */}
          {/* <p>Subcategory: {toy.subcategory}</p> */}
          <p>Available Quantity: {toy.availableQuantity}</p>
          {/* <p>Shipping Method: {toy.shipping.method}</p> */}
          {/* <p>Shipping Time: {toy.shipping.time}</p> */}
          <button
            className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-md"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  </>
  );
};

export default Alltoys;
