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

  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if(proceed){
        fetch(`http://localhost:5000/myToys/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successful');
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining)
            }
        })
    }
}

  return (
    <div>
      <h3>My Toys Page {orders.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
               Image, ToyName and <br /> delivary Address
              </th>
              <th>Seller and <br /> ratings</th>
              <th>Price</th>
              <th>Order Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map(order => <MyToysRow 
                    key={order._id} 
                    order={order}
                    handleDelete={handleDelete}
                    ></MyToysRow>)
            }
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyToys;
