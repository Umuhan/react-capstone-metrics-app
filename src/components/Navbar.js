import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosSettings } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="nav main-color" data-testid="nav-test">
      <div className="navbar">
        <NavLink to="/" onClick={() => navigate("/")}>
          <IoIosArrowBack className="icon txtwhite" />
        </NavLink>
        <h1 className="txtwhite">
          {location.pathname === "/"
            ? "Countries Info 2023"
            : "Country Details"}
        </h1>
        <div>
          <NavLink to="/country">
            <FaMicrophone className="icon txtwhite" />
          </NavLink>
          <NavLink to="/country">
            <IoIosSettings className="icon txtwhite" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
