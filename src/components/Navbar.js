import React from "react";
import "./styles/home.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosSettings } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="nav " data-testid="nav-test">
      <div className="navbar">
        <NavLink to="/" onClick={() => navigate("/")}>
          <IoIosArrowBack className="icon " />
        </NavLink>
        <h1>
          {location.pathname === "/"
            ? "Countries Info 2023"
            : "Country Details"}
        </h1>
        <div>
          <NavLink to="/country">
            <FaMicrophone className="icon " />
          </NavLink>
          <NavLink to="/country">
            <IoIosSettings className="icon " />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
