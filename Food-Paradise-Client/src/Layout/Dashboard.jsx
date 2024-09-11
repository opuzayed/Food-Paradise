import {
  FaCalendar,
  FaClipboardList,
  FaComment,
  FaHome,
  FaListAlt,
  FaShoppingCart,
  FaUserAlt,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaBook, FaEnvelope, FaPaypal, FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex text-black">
      <div className="w-64 min-h-screen bg-orange-200">
        <h5 className="mt-4 p-4">
          <span className="font-bold">FOOD PARADISE</span> <br />
          <span className="tracking-[0.2em] font-medium">RESTAURANT</span>
        </h5>
        <ul className="p-4 mt-5 font-medium space-y-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome" className="flex items-center">
                  <FaHome className="mr-2"></FaHome>ADMIN HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center"
                >
                  <FaUtensils className="mr-2"></FaUtensils>ADD ITEMS
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex items-center"
                >
                  <FaListAlt className="mr-2"></FaListAlt>MANAGE ITEMS
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/bookings"
                  className="flex items-center"
                >
                  <FaBook className="mr-2"></FaBook>MANAGE BOOKINGS
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/users" className="flex items-center text-white">
                  <FaUsers className="mr-2"></FaUsers>ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome" className="flex items-center">
                  <FaHome className="mr-2"></FaHome>USER HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className="flex items-center"
                >
                  <FaCalendar className="mr-2"></FaCalendar>RESERVATION
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="flex items-center"
                >
                  <FaPaypal className="mr-2"></FaPaypal>PAYMENT HISTORY
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center text-white"
                >
                  <FaShoppingCart className="mr-2"></FaShoppingCart>MY CART(
                  {cart.length})
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/review" className="flex items-center ">
                  <FaComment className="mr-2"></FaComment>ADD REVIEW
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/booking" className="flex items-center ">
                  <FaClipboardList className="mr-2"></FaClipboardList>MY
                  BOOKINGS
                </NavLink>
              </li>
            </>
          )}

          {/* shared navlinks */}

          <div className="divider before:bg-black after:bg-black"></div>

          <li>
            <NavLink to="/" className="flex items-center">
              <FaHome className="mr-2"></FaHome>HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/salad" className="flex items-center">
              <FaClipboardList className="mr-2"></FaClipboardList>MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="flex items-center">
              <FaEnvelope className="mr-2"></FaEnvelope>CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
