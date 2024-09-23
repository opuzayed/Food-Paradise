import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaListAlt, FaShoppingCart, FaUsers } from "react-icons/fa";

const AsminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      console.log("revenue", res.data);
      return res.data;
    },
  });

  const {data: chartData} = useQuery({
          queryKey: ['order-stats'],
          queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
          }
  });

  if(isLoading){
    return (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
}


  return (
    <div>
      <h2 className="text-2xl font-bold font-serif text-cyan-500 mb-5">
        <span>Hi! Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FaDollarSign className="text-4xl font-bold"></FaDollarSign>
          </div>
          <div className="stat-title">REVENUE</div>
          <div className="stat-value text-primary">{stats ? `$${stats.revenue}` : "Loading..."}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl font-bold"></FaUsers>
          </div>
          <div className="stat-title">USERS</div>
          <div className="stat-value text-secondary">{stats.users}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaListAlt className="text-4xl font-bold"></FaListAlt>
          </div>
          <div className="stat-title">MENU ITEMS</div>
          <div className="stat-value text-orange-500">{stats.menuItems}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-cyan-500">
          <FaShoppingCart className="text-4xl font-bold"></FaShoppingCart>
          </div>
          <div className="stat-title">ORDERS</div>
          <div className="stat-value text-cyan-500">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AsminHome;
