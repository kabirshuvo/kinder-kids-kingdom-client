import { useEffect, useState } from 'react';

const Alltoys = () => {
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
    <div>
      <h3>This is the All Toys Page</h3>
      {toysData.map((toy) => (
        <div key={toy.id}>
          <h4>{toy.name}</h4>
          <img src={toy.picture} alt={toy.name} />
          <p>Price: ${toy.price}</p>
          <p>Rating: {toy.rating}</p>
          <p>Age Group: {toy.ageGroup}</p>
          <p>Description: {toy.description}</p>
          <p>Seller: {toy.sellerName}</p>
          <p>Category: {toy.category}</p>
          <p>Subcategory: {toy.subcategory}</p>
          <p>Available Quantity: {toy.availableQuantity}</p>
          <p>Shipping Method: {toy.shipping.method}</p>
          <p>Shipping Time: {toy.shipping.time}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Alltoys;
