import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  ListAltOutlined,
  AccountBalanceWalletOutlined,
  SavingsOutlined,
  AppsOutlined,
  LogoutOutlined,
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";

const menuItems = [
  { label: "Dashboard", path: "/", icon: <DashboardOutlined style={{ fontSize: '16px' }} /> },
  { label: "Orders", path: "/orders", icon: <ListAltOutlined style={{ fontSize: '16px' }} /> },
  { label: "Holdings", path: "/holdings", icon: <AccountBalanceWalletOutlined style={{ fontSize: '16px' }} /> },
  { label: "Funds", path: "/funds", icon: <SavingsOutlined style={{ fontSize: '16px' }} /> },
  { label: "Apps", path: "/apps", icon: <AppsOutlined style={{ fontSize: '16px' }} /> },
];

const Menu = ({ username, onLogout }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode');
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Derive initials from username
  const getInitials = (name) => {
    if (!name) return "U";
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="menu-container">
      <img src="src/assets/logo.png" style={{ width: "34px" }} alt="TradePro Logo" />
      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={item.path}>
              <Link
                style={{ textDecoration: "none" }}
                to={item.path}
                onClick={() => handleMenuClick(index)}
              >
                <p
                  className={selectedMenu === index ? "menu selected" : "menu"}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  {item.icon}
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="theme-toggle" onClick={toggleTheme} style={{ cursor: "pointer", marginRight: "16px", display: "flex", alignItems: "center" }}>
          {isLightMode ? <DarkModeOutlined style={{ fontSize: "20px", color: "var(--text-secondary)" }} /> : <LightModeOutlined style={{ fontSize: "20px", color: "var(--text-secondary)" }} />}
        </div>
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{getInitials(username)}</div>
          <p className="username">{username || "USERID"}</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <button onClick={onLogout}>
              <LogoutOutlined style={{ fontSize: '15px', marginRight: '8px', verticalAlign: 'middle' }} />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
