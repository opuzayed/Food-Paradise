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
    <div className="my-10 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"} />
      <div className="overflow-x-auto w-500px lg:w-full rounded-lg shadow-border">
        <table className="min-w-full bg-white border-0 rounded-xl overflow-hidden shadow-border">
          {/* Head */}
          <thead className="text-black border-b border-gray-200">
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
                className="transition-all duration-300 hover:bg-sky-100 border-b last:border-b-0 border-gray-200"
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
                    <button className="btn bg-slate-800 hover:bg-slate-800 text-white btn-sm rounded-full border-none transition-all duration-300">
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
