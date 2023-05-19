import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/usTitle";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
const url =`http://localhost:5000/myToys?email=${user.email}`

useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}, [url])





    useTitle('K3 || My Toys');
    return (
        <div>
            <h3>My Toys Page</h3>
        </div>
    );
};

export default MyToys;