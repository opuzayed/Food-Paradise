import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex text-black">
            <div className="w-64 min-h-screen bg-orange-200">
                <h5 className="mt-4 p-4"><span className="font-bold">FOOD PARADISE</span> <br /><span className="tracking-[0.2em] font-medium">RESTAURANT</span></h5>
               
            <ul className="p-4 mt-5 font-medium">
                <li><NavLink to='/dashboard/cart' className="flex items-center"><FaShoppingCart className="mr-2"></FaShoppingCart>MY CART</NavLink></li>
            </ul>
            </div>
            <div className="flex-1">
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
