import { useEffect, useState } from "react";
import ScienceandExploreCard from "../CategorisedCards/ScienceandExploreCard";


const ScienceandExploration = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
      fetch("https://kinder-kids-server.vercel.app/categories/2")
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        })
        .catch((error) => console.error(error));
    }, []);
  
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {toys.map((toy) => <ScienceandExploreCard key={toy._id} toy={toy}></ScienceandExploreCard>
        )}
      </div>
    );
  };

export default ScienceandExploration;