import React, { useState } from "react";

// MUI
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

// Icons
import { Menu } from "lucide-react";

// Component Menu
import MenuProfile from "./MenuProfile";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuPrifile = (event) => {
    setOpenMenu(event.currentTarget);
  };

  return (
    <>
      <nav className="navbar bg-white px-4 pb-3 border-bottom">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Left Side */}
          <div className="d-flex align-items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="btn d-md-none p-1"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              <Menu size={22} />
            </button>

            <span className="navbar-brand fw-medium m-0">Dashboard</span>
          </div>

          {/* Desktop */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              style={{ width: "200px" }}
            />
            <IconButton>
              <NotificationsActiveOutlinedIcon />
              <CartBadge badgeContent={3} color="primary" overlap="circular" />
            </IconButton>
            {/* Menu Profile */}
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleMenuPrifile}
                aria-controls={openMenu ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
              >
                <Avatar
                  sx={{ bgcolor: deepPurple[500], width: 36, height: 36 }}
                >
                  AU
                </Avatar>
              </IconButton>
            </Tooltip>
            <span className="fs-6" style={{ marginLeft: "-15px" }}>
              Admin User
            </span>
          </div>

          {/* Mobile */}
          <div className="d-flex d-md-none align-items-center gap-3">
            <SearchOutlinedIcon />
            <IconButton>
              <NotificationsActiveOutlinedIcon />
              <CartBadge badgeContent={3} color="primary" overlap="circular" />
            </IconButton>
            {/* Menu Profile */}
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleMenuPrifile}
                aria-controls={openMenu ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
              >
                <Avatar
                  sx={{ bgcolor: deepPurple[500], width: 36, height: 36 }}
                >
                  AU
                </Avatar>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </nav>
      <MenuProfile openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Navbar;
