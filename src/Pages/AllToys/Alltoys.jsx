import { useEffect, useState } from "react";
import SingleToyCard from "../../Components/singleToyCard/singleToyCard";
import useTitle from "../../hooks/usTitle";

const Alltoys = () => {
  useTitle("k3 || All Toys");

  const [toysData, setToysData] = useState([]);
  const [visibleToys, setVisibleToys] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchToysData = async () => {
      try {
        const response = await fetch(
          "https://kinder-kids-server.vercel.app/alltoys"
        );
        const data = await response.json();
        setToysData(data);

        setVisibleToys(data.slice(0, 9));

        setShowMore(data.length > 9);
      } catch (error) {
        console.error("Error fetching toy data:", error);
      }
    };

    fetchToysData();
  }, []);

  const handleShowMore = () => {
    const remainingToys = toysData.slice(visibleToys.length);

    const nextToys = remainingToys.slice(0, 9);

    setVisibleToys((prevVisibleToys) => [...prevVisibleToys, ...nextToys]);

    setShowMore(remainingToys.length > 9);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-7 my-7">
      <h3 className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-3xl font-bold py-7">Find Your Toy</h3>
      {visibleToys.map((toy) => (
        <SingleToyCard key={toy._id} toy={toy} className="flex justify-center" />
      ))}
      {showMore && (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center">
          <button
            className="bg-primary text-white px-4 py-2 rounded-md w-full mt-16"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Alltoys;
