import { useEffect, useState } from 'react';
import SingleToyCard from '../../Components/singleToyCard/singleToyCard';
import useTitle from '../../hooks/usTitle';

const Alltoys = () => {
    useTitle('k3 || All Toys');
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    const fetchToysData = async () => {
      try {
        const response = await fetch('http://localhost:5000/alltoys');
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
    <div className="grid grid-cols-3 gap-4 py-7 my-7">
      <h3 className="col-span-3 text-center text-3xl font-bold py-7">Lets Find Your Toy</h3>
      {toysData.map((toy) => (
        <SingleToyCard key={toy._id} toy={toy} className="relative bg-slate-700 p-4 shadow-md rounded-lg">
          
        </SingleToyCard>
      ))}
    </div>
  </>
  );
};

export default Alltoys;
