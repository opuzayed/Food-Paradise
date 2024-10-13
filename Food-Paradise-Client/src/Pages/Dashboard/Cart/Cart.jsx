import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton/CustomButton";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: 'Are You Sure, You Want To Delete This Item',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Selected Item has been deleted.",
                icon: "success"
              });
              refetch();
            }
          })
      }
    });
  };

  return (
    <div className="my-10 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">ITEMS: {cart.length}</h2>
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">TOTAL PRICE: ${totalPrice.toFixed(2)}</h2>
        <Link to={`${cart.length > 0 ? '/dashboard/payment' : 'javascript:void(0)'}`}>
          <CustomButton btnText={'Pay'} classBG={`${cart.length > 0 ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-500 opacity-50 cursor-not-allowed'}` }></CustomButton>
        </Link>
      </div>
      <div className="overflow-x-auto w-500px lg:w-full rounded-lg shadow-border">
      
        <table className="min-w-full bg-white border-0 rounded-xl overflow-hidden shadow-border">
          {/* Head */}
          <thead className="text-black border-b border-gray-200">
            <tr>
              <th className="p-4 text-center font-semibold">#</th>
              <th className="p-4 text-center font-semibold">IMAGE</th>
              <th className="p-4 text-center font-semibold">NAME</th>
              <th className="p-4 text-center font-semibold">PRICE</th>
              <th className="p-4 text-center font-semibold">ACTION</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {
              cart.map((item, index) => (
                <tr key={item._id} className="transition-all duration-300 hover:bg-sky-100 border-b last:border-b-0 border-gray-200">
                  <td className="p-4 text-center text-lg font-semibold">{index + 1}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20 border-2 border-gray-300 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full h-full rounded shadow-small-img"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center text-lg font-semibold">{item.name}</td>
                  <td className="p-4 text-center text-lg font-semibold">${item.price.toFixed(2)}</td>
                  <td className="p-4 text-center">
                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-500 hover:bg-red-100 transition-colors duration-200">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
      
    </div>
  );
};

export default Cart;
