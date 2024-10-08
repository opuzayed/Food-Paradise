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
    <div className="my-10 mx-10">
      <h2 className="text-5xl font-medium">Total Users : {users.length} </h2>

      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead className="text-black bg-orange-500">
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? 'Admin' : <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-orange-500 btn-lg"
                  >
                    <FaUsers className="text-white"></FaUsers>
                  </button>
                  }
                </td>
                <td>
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
