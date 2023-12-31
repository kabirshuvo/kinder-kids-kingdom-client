const MyToysRow = ({ order, handleDelete, handleConfirm }) => {
  const { _id, picture, price, sellerName, rating, toy, address, status } = order;

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture} alt={toy} />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy}</div>
              <div className="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td>
          {sellerName}
          <br />
          <span className="badge badge-ghost badge-sm">
            Rating Star:{rating}
          </span>
        </td>
        <td>{price}</td>
        <th>
          {status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
            <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs text-success">
            <small>Confirm Order</small>
          </button>}
        </th>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-xs text-red-500"
          >
            Delete Order
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyToysRow;
