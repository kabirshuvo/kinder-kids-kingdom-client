import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const KindersCategory = () => {
  const categorisedToys = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const toysPerPage = 20;

  // Calculate index of the last toy in the current page
  const indexOfLastToy = currentPage * toysPerPage;
  // Calculate index of the first toy in the current page
  const indexOfFirstToy = indexOfLastToy - toysPerPage;
  // Get the current page of toys
  const currentToys = categorisedToys.slice(indexOfFirstToy, indexOfLastToy);

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h3 className="text-center text-3xl py-8 text-orange-300">
        Kinder Kids {categorisedToys.length} Toys In this Category
      </h3>
      <table className="table-auto w-full">
        <thead>
          <tr className="mb-4">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {currentToys.map((toy) => (
            <tr key={toy._id} className="hover:bg-[#336699] text-center">
              <td className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <img
                    className="h-16 w-48 rounded-1/2"
                    src={toy.picture}
                    alt={toy.name}
                  />
                </div>
              </td>
              <td className="px-4 py-2">{toy.name}</td>
              <td className="px-4 py-2">{toy.price}</td>
              <td className="px-4 py-2">
                <p className="text-warning">{toy.rating}</p>
              </td>
              <td className="px-4 py-2">
                <Link to={`/toydetails/${toy._id}`}>
                  <button className="bg-slate-900 text-success">
                    <small>View Details</small>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex items-center justify-center mt-7">
        {Array.from({ length: Math.ceil(categorisedToys.length / toysPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 px-4 py-2 rounded-full ${
              currentPage === index + 1 ? "bg-slate-900 text-white" : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center mt-7">
        <Link to="/imagegelary" className="bg-slate-900 w-full">
          <button className="bg-slate-900 w-full">View Categories</button>
        </Link>
      </div>
    </div>
  );
};

export default KindersCategory;