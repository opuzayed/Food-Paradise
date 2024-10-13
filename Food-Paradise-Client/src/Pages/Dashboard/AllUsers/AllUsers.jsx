import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
      console.log(res.data);
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin now`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are You Sure, You Want To Delete ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
        .then(res => {
          if(res.data.deletedCount){
            Swal.fire({
          title: "Deleted!",
          text: `{user.name} has been deleted Successfully`,
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
      <h2 className="text-3xl lg:text-5xl font-medium mb-5">Total Users: {users.length} </h2>
      <div className="overflow-x-auto w-500px lg:w-full rounded-lg shadow-border">
        <table className="min-w-full bg-white border-0 rounded-xl overflow-hidden shadow-border">
          {/* head */}
          <thead className="text-black border-b border-gray-200">
            <tr>
              <th className="p-4 text-center font-semibold">#</th>
              <th className="p-4 text-center font-semibold">NAME</th>
              <th className="p-4 text-center font-semibold">EMAIL</th>
              <th className="p-4 text-center font-semibold">ROLE</th>
              <th className="p-4 text-center font-semibold">ACTION</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {users.map((user, index) => (
              <tr key={user._id} className="transition-all duration-300 hover:bg-sky-100 border-b last:border-b-0 border-gray-200">
                <td className="p-4 text-center text-lg font-semibold">{index + 1}</td>
                <td className="p-4 text-center text-lg font-semibold">{user.name}</td>
                <td className="p-4 text-center text-lg font-semibold">{user.email}</td>
                <td className="p-4 text-center text-lg font-semibold">
                  {
                    user.role === 'admin' ? 'Admin' : <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-slate-800 btn-md hover:bg-slate-800"
                  >
                    <FaUsers className="text-white"></FaUsers>
                  </button>
                  }
                </td>
                <td className="p-4 text-center text-lg font-semibold">
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-lg text-red-500"
                  >
                    <FaTrashAlt></FaTrashAlt>
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

export default AllUsers;
