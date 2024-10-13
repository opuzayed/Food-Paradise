import { NavLink } from "react-router-dom";

const NavMenuLink = ({ children, className = "", to = "#" }) => {
  const linkStyles = `font-normal text-slate-900 transition-colors duration-300 hover:text-accent-color`;
  const activeLinkStyles = `text-accent-color font-semibold `;
  return (
    <li
      className={`flex items-start lg:items-center justify-start lg:justify-center px-2 py-2 md:py-0 md:px-0 ${className}`}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${linkStyles} ${activeLinkStyles}` : `${linkStyles}`
        }
        style={({ isActive }) => ({
          backgroundColor: "transparent",
          color: isActive && "#059DF4",
        })}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavMenuLink;
