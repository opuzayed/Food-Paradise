import {
  FaClipboardList,
  FaHome,
  FaListAlt,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import {  FaPaypal } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { useState } from "react";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isOpen, setIsOpen] = useState(false); 
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); 
  };
  return (
    <div className="flex flex-col lg:flex-row text-sky-500">
      <div className="w-full flex flex-row items-center lg:items-start lg:flex-col justify-between lg:justify-start lg:w-64 lg:min-h-screen bg-black">
        <h5 className="mt-4 p-4">
          <span className="font-bold">FOOD PARADISE</span> <br />
          <span className="tracking-[0.2em] font-medium text-rose-500">RESTAURANT</span>
        </h5>
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown} 
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {isOpen && ( 
            <ul
              tabIndex={0}
              className="right-0 menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome" className="flex items-center text-white">
                  <FaHome className="mr-2"></FaHome>ADMIN HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center text-white"
                >
                  <FaUtensils className="mr-2"></FaUtensils>ADD ITEMS
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex items-center text-white"
                >
                  <FaListAlt className="mr-2"></FaListAlt>MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users" className="flex items-center text-amber-300">
                  <FaUsers className="mr-2"></FaUsers>ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome" className="flex items-center text-white">
                  <FaHome className="mr-2"></FaHome>USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="flex items-center text-white"
                >
                  <FaPaypal className="mr-2"></FaPaypal>PAYMENT HISTORY
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center text-amber-300"
                >
                  <FaShoppingCart className="mr-2"></FaShoppingCart>MY CART(
                  {cart.length})
                </NavLink>
              </li>
            </>
          )}
          <div className="divider before:bg-black after:bg-black"></div>
          <li>
            <NavLink to="/" className="flex items-center text-white">
              <FaHome className="mr-2"></FaHome>HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="flex items-center text-white">
              <FaClipboardList className="mr-2"></FaClipboardList>MENU
            </NavLink>
          </li>
            </ul>
          )}
        </div>
        <ul className="p-4 mt-5 font-medium space-y-4 hidden lg:block">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome" className="flex items-center text-white">
                  <FaHome className="mr-2"></FaHome>ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center text-white"
                >
                  <FaUtensils className="mr-2"></FaUtensils>ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex items-center text-white"
                >
                  <FaListAlt className="mr-2"></FaListAlt>MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users" className="flex items-center text-amber-300">
                  <FaUsers className="mr-2"></FaUsers>ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome" className="flex items-center text-white">
                  <FaHome className="mr-2"></FaHome>USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="flex items-center text-white"
                >
                  <FaPaypal className="mr-2"></FaPaypal>PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center text-amber-300"
                >
                  <FaShoppingCart className="mr-2"></FaShoppingCart>MY CART(
                  {cart.length})
                </NavLink>
              </li>
            </>
          )}

          <div className="divider before:bg-black after:bg-black"></div>

          <li>
            <NavLink to="/" className="flex items-center text-white">
              <FaHome className="mr-2"></FaHome>HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/salad" className="flex items-center text-white">
              <FaClipboardList className="mr-2"></FaClipboardList>MENU
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
