import { useContext, useState } from "react"; // Import useState
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../../public/logo.png";
import "./cart.css";
import Container from "../../../Components/Container/Container";
import NavMenuLink from "../../../Components/NavMenuLink/NavMenuLink";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin(); 
  const [isOpen, setIsOpen] = useState(false); // Add state for dropdown toggle

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown state
  };

  const navOptions = (
    <>
    <NavMenuLink to="/">Home</NavMenuLink>
    <NavMenuLink to="/menu">Our Menu</NavMenuLink>
    <NavMenuLink to="/order/salad">Order Food</NavMenuLink>
    {!user && <NavMenuLink to="/signup">Sign Up</NavMenuLink>}
      {user && isAdmin && (
       
          <NavMenuLink to="/dashboard/adminHome" >
            Dashboard
          </NavMenuLink>
        
      )}
      {user && !isAdmin && (
       
          <NavMenuLink to="/dashboard/userHome" >
            Dashboard
          </NavMenuLink>
      )}
      <li className="flex items-start lg:items-center justify-center px-2 py-2 lg:rounded-lg lg:bg-[#2F855A] lg:hover:bg-[#276749]">
        <NavLink to="/dashboard/cart" className="flex items-center justify-center no-button-styles bg-[#2F855A] px-2 py-2 rounded-lg hover:bg-[#276749] cursor-pointer">
          <FaShoppingCart className="text-lg text-green-400 mr-2" />
          <span className="badge badge-secondary font-bold text-white bg-[#2F855A] border-sky-400">
            +{cart.length}
          </span>
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="flex items-start lg:items-center justify-center px-2 py-2 md:py-0 md:px-0">
            <span className="font-normal capitalize">{user?.displayName}</span>
          </li>
          <li className="flex items-start lg:items-center justify-center px-2 py-2 md:py-0 md:px-0">
            <button onClick={handleLogOut} className="font-normal text-slate-900  hover:text-accent-color transition-colors duration-300" >
              Logout
            </button>
          </li>
        </>
      ) : (
        
          <NavMenuLink to="/login" className="no-underline font-normal text-white ">
            Login
          </NavMenuLink>
        
      )}
    </>
  );

  return (
    <div className="fixed h-[65px] z-30 bg-white w-full">
      <Container width="max-w-screen-xl">
    <div className="navbar  text-slate-900">
        <div className="flex justify-between items-center w-full">
      <div className="navbar-start flex justify-between items-center w-full lg:w-auto">
        
        <Link to="/" className="text-xl flex items-center">
          <img src={logo} alt="Logo" className="h-9 mr-1" />
          <span className="text-xl font-bold text-slate-900">Food Paradise</span>
        </Link>
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown} // Attach toggle function
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {isOpen && ( // Conditionally render the dropdown based on isOpen state
            <ul
              tabIndex={0}
              className="right-0 menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-start lg:items-center space-x-4">{navOptions}</ul>
      </div>
      </div>
    </div>
      </Container>
    </div>
  );
};

export default NavBar;
