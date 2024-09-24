import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../../public/logo.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const linkStyles = `no-underline font-bold text-white hover:text-[#28A63A]`; // Base styles for all links
  const activeLinkStyles = `text-[#28A63A] underline`; // Styles for active link

  const navOptions = (
    <>
      <li className="flex items-center justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${linkStyles} ${activeLinkStyles}` : `${linkStyles}`
          }
          style={({ isActive }) => ({
            backgroundColor: 'transparent',
            color: isActive ? '#28A63A' : '',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Home
        </NavLink>
      </li>
      <li className="flex items-center justify-center">
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? `${linkStyles} ${activeLinkStyles}` : `${linkStyles}`
          }
          style={({ isActive }) => ({
            backgroundColor: 'transparent',
            color: isActive ? '#28A63A' : '',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Our Menu
        </NavLink>
      </li>
      <li className="flex items-center justify-center">
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive ? `${linkStyles} ${activeLinkStyles}` : `${linkStyles}`
          }
          style={({ isActive }) => ({
            backgroundColor: 'transparent',
            color: isActive ? '#28A63A' : '',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Order Food
        </NavLink>
      </li>
      <li className="flex items-center justify-center">
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? `${linkStyles} ${activeLinkStyles}` : `${linkStyles}`
          }
          style={({ isActive }) => ({
            backgroundColor: 'transparent',
            color: isActive ? '#28A63A' : '',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          SignUp
        </NavLink>
      </li>
      {user && isAdmin && (
        <li className="flex items-center justify-center">
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              isActive ? `${linkStyles} ${activeLinkStyles}` : `${linkStyles}`
            }
            style={({ isActive }) => ({
              backgroundColor: 'transparent',
              color: isActive ? '#28A63A' : '',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li className="flex items-center justify-center">
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive }) =>
              isActive ? `${linkStyles} ${activeLinkStyles}` : `${linkStyles}`
            }
            style={({ isActive }) => ({
              backgroundColor: 'transparent',
              color: isActive ? '#28A63A' : '',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li className="flex items-center justify-center">
        <NavLink to="/dashboard/cart">
          <button className="btn btn-xs">
            <FaShoppingCart className="text-lg text-green-400" />
            <div className="badge badge-secondary font-bold">+{cart.length}</div>
          </button>
        </NavLink>
      </li>

      {user ? (
        <>
          <li className="flex items-center justify-center">
            <span className="font-bold text-white cursor-default transition-colors duration-200">
              {user?.displayName}
            </span>
          </li>
          <li className="flex items-center justify-center">
            <button
              onClick={handleLogOut}
              className="btn btn-ghost text-white font-bold hover:text-[#28A63A]"
            >
              LogOut
            </button>
          </li>
        </>
      ) : (
        <li className="flex items-center justify-center">
          <NavLink to="/login" className={linkStyles}>
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-30 bg-[#1F4E3D] text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="text-xl flex items-center">
          <img src={logo} alt="Logo" className="h-14 mr-1" />
          <span className="text-3xl font-bold text-white">Food Paradise</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default NavBar;
