import { useContext } from "react";
import { Link } from "react-router-dom";
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

  const navOptions = (
    <>
      <li className="flex items-center justify-center">
        <Link to="/">Home</Link>
      </li>
      <li className="flex items-center justify-center">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="flex items-center justify-center">
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li className="flex items-center justify-center">
        <Link to="/signup">SignUp</Link>
      </li>
      {/* <li className="flex items-center justify-center">
        <Link to="/secret">Secret</Link>
      </li> */}
      {
        user && isAdmin && <li className="flex items-center justify-center">
        <Link to="/dashboard/adminHome">Dashboard</Link>
      </li>
      }
      {
        user && !isAdmin && <li className="flex items-center justify-center">
        <Link to="/dashboard/userHome">Dashboard</Link>
      </li>
      }
      <li className="flex items-center justify-center">
        <Link to="/dashboard/cart">
          <button className="btn btn-xs">
           <FaShoppingCart className="text-lg text-green-400"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li className="flex items-center justify-center">
            <span>{user?.displayName}</span>
          </li>
          <li className="flex items-center justify-center">
            <button onClick={handleLogOut} className="btn btn-ghost text-white">
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="flex items-center justify-center">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  {
    /* <li>
            <a>Parent</a>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li> */
  }

  // const navOptionsMob = <>
  //     <li><a>Item 1</a></li>
  //     <li>
  //         <details>
  //             <summary>Parent</summary>
  //             <ul className="p-2">
  //                 <li><a>Submenu 1</a></li>
  //                 <li><a>Submenu 2</a></li>
  //             </ul>
  //         </details>
  //     </li>
  //     <li><a>Item 3</a></li>
  // </>
  return (
    <>
      <div className="navbar fixed z-30 bg-opacity-50 bg-black text-white max-w-screen-xl">
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
          {/* <a className="text-xl flex items-center">
            <img src={logo} alt="logo" className="h-16 mr-1"/>
            Food Paradise
            </a> */}
            <Link to="/" className="text-xl flex items-center">
          <img src={logo} alt="Logo" className="h-14 mr-1" />
          <span className="text-3xl font-bold text-lime-500">Food Paradise</span>
        </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
