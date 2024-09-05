import { FaCalendar, FaClipboardList, FaComment, FaHome, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex text-black">
            <div className="w-64 min-h-screen bg-orange-200">
                <h5 className="mt-4 p-4"><span className="font-bold">FOOD PARADISE</span> <br /><span className="tracking-[0.2em] font-medium">RESTAURANT</span></h5>
            <ul className="p-4 mt-5 font-medium space-y-4">
                
                <li><NavLink to='/dashboard/userHome' className="flex items-center"><FaHome className="mr-2"></FaHome>USER HOME</NavLink></li>

                <li><NavLink to='/dashboard/reservation' className="flex items-center"><FaCalendar className="mr-2"></FaCalendar>RESERVATION</NavLink></li>

                <li><NavLink to='/dashboard/paymentHistory' className="flex items-center"><FaPaypal className="mr-2"></FaPaypal>PAYMENT HISTORY</NavLink></li>

                <li><NavLink to='/dashboard/cart' className="flex items-center text-white"><FaShoppingCart className="mr-2"></FaShoppingCart>MY CART</NavLink></li>
               
                <li><NavLink to='/dashboard/review' className="flex items-center "><FaComment className="mr-2"></FaComment>ADD REVIEW</NavLink></li>

                <li><NavLink to='/dashboard/booking' className="flex items-center "><FaClipboardList className="mr-2"></FaClipboardList>MY BOOKINGS</NavLink></li>

                <div className="divider before:bg-black after:bg-black"></div>

                <li><NavLink to='/' className="flex items-center"><FaHome className="mr-2"></FaHome>HOME</NavLink></li>
            </ul>
            </div>
            <div className="flex-1">
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
