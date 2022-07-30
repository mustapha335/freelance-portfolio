import React from "react";
import "./navbar.css";
import BungalowOutlinedIcon from "@mui/icons-material/BungalowOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorageIcon from "@mui/icons-material/Storage";
import DnsIcon from "@mui/icons-material/Dns";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <span className='navbar-buttons'>
          <h3 className='navbar-buttons-txt'>
            <BungalowOutlinedIcon sx={{ fontSize: "26px", color: "#151010" }} />
          </h3>
        </span>
        <span className='navbar-buttons'>
          <h3 className='navbar-buttons-txt'>
            <PersonOutlineIcon sx={{ fontSize: "26px", color: "#151010" }} />
          </h3>
        </span>
        <span className='navbar-buttons'>
          <h3 className='navbar-buttons-txt'>
            <StorageIcon sx={{ fontSize: "24px", color: "#151010" }} />
          </h3>
        </span>
        <span className='navbar-buttons'>
          <h3 className='navbar-buttons-txt'>
            <DnsIcon sx={{ fontSize: "23px", color: "#151010" }} />
          </h3>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
