import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${item.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          {/* Head */}
          <thead className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white border-b border-gray-300">
            <tr>
              <th className="p-4 text-center font-semibold">#</th>
              <th className="p-4 text-center font-semibold">ITEM IMAGE</th>
              <th className="p-4 text-center font-semibold">ITEM NAME</th>
              <th className="p-4 text-center font-semibold">PRICE</th>
              <th className="p-4 text-center font-semibold">UPDATE</th>
              <th className="p-4 text-center font-semibold">DELETE</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {menu.map((item, index) => (
              <tr
                key={item._id}
                className="relative transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-gray-100 hover:to-cyan-200"
              >
                <td className="p-4 text-center text-lg font-semibold">{index + 1}</td>
                <td className="p-4 text-center">
                  <div className="flex justify-center items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle h-20 w-20 border-2 border-gray-300 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full rounded"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-lg font-semibold">{item.name}</td>
                <td className="p-4 text-center text-lg font-semibold">${item.price.toFixed(2)}</td>
                <td className="p-4 text-center">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn bg-blue-600 hover:bg-blue-700 text-white btn-sm rounded-full border-none transition-all duration-300">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn bg-red-600 hover:bg-red-700 text-white btn-sm rounded-full border-none transition-all duration-300"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
