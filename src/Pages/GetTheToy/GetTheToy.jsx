import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const GetTheToy = () => {
    const myToy = useLoaderData();
    const { 
        _id,
        name,
        picture,
        ageGroup,
        price,
        rating,
        sellerName,
        availableQuantity
        } = myToy;
    console.log(myToy);

    const {user} = useContext(AuthContext);

    const handleGetTheToy = event => {
        event.preventDefault();

        const form = event.target;
        const uName = form.name.value;
        const address = form.address.value;
        const email = form.email.value;

       const orderInfo = {
        customerName: uName,
        email,
        picture,
        ageGroup,
        rating,
        sellerName,
        address,
        toy: name,
        toy_id: _id,
        price: price

       }

      

       fetch(`http://localhost:5000/myToys`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orderInfo)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('Order Confirmed')
        }
       })


    }
    return (
        <>
         <div className="py-7">
         <h3 className="text-center">{name}</h3>
         <p className="text-center mb-8">The Toy is Almost Yours</p>
   

<table className="table-auto w-full mb-7">
  <thead >
    <tr>
      <th className="text-left pb-4">Picture</th>
      <th className="text-left pb-4">Age Group</th>
      <th className="text-left pb-4">Seller Name</th>
      <th className="text-left pb-4">Rating</th>
      <th className="text-left pb-4">Price</th>
      <th className="text-left pb-4">Available Quantity</th>
    </tr>
  </thead>
 
  <tbody >
    <tr >
      <td >
        <img style={{ height: '5rem', borderRadius: '16px' }} src={picture} alt={name} />
      </td>
      <td className="text-left">{ageGroup}</td>
      <td className="text-left">{sellerName}</td>
      <td className="text-left">{rating}</td>
      <td className="text-left">{price}</td>
      <td className="text-left">{availableQuantity}</td>
    </tr>
  </tbody>
</table>

<form onSubmit={handleGetTheToy} style={{ height: '75vh' }}>
  <div className="grid grid-cols-1 mx-auto w-1/2">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input
        type="text"
        placeholder="name"
        defaultValue={user?.displayName}
        name="name"
        className="input input-bordered"
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Address</span>
      </label>
      <input
        type="text"
        placeholder="Put Your Address"
        name="address"
        className="input input-bordered"
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        type="email"
        defaultValue={user?.email}
        name="email"
        className="input input-bordered"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Amount</span>
      </label>
      <input
        type="text"
        defaultValue={price}
        name="amount"
        className="input input-bordered"
      />
    </div>
  </div>
  <div className="form-control mt-6">
    <input className="btn btn-primary btn-block" type="submit" value="confirm the order" />
  </div>
</form>

    </div>   
        </>
    );
};

export default GetTheToy;