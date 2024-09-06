import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = id => {
    
  }

  return (
    <div>
      <div className="flex justify-evenly mb-10">
        <h2 className="text-3xl font-medium">ITEMS: {cart.length}</h2>
        <h2 className="text-3xl font-medium">TOTAL PRICE: {totalPrice}</h2>
        <button className="btn btn-primary">PAY</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>
                #
              </th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item,index) => <tr key= {item._id}>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>{item.price}</td>
                    <th>
                      <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-500"><FaTrashAlt></FaTrashAlt></button>
                    </th>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
