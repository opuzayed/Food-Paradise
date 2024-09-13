import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ManageItems = () => {
  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subHeading={"Hurry Up"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {

              }
              <tr>
                <td>
                  
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  
                </td>
                <td>

                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
