import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-200">
                <h5 className="mt-10 p-4"><span className="font-bold">FOOD PARADISE</span> <br /><span className="tracking-[0.2em]">RESTAURANT</span></h5>
               
            <ul className="menu p-4">
                <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>MY CART</NavLink></li>
            </ul>
            </div>
            <div className="flex-1">
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
