

const MyToysRow = ({order}) => {
    console.log(order);

    const {picture, email, price, sellerName, rating, toy, address} = order;
    return (
        <>
            <tr>
             
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={picture}
                        alt={toy}
                      />
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
                <button className="btn btn-ghost btn-xs">Confirm Order</button>
              </th>
            </tr>
        </>
    );
};

export default MyToysRow;