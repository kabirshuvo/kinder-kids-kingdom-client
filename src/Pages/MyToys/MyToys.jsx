import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/usTitle";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  useTitle("K3 || My Toys");
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const url = `http://localhost:5000/myToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  return (
    <div>
      <h3>My Toys Page {orders.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map(order => <MyToysRow key={order._id} order={order}></MyToysRow>)
            }
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyToys;
