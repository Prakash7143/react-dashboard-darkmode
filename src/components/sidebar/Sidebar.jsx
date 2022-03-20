import React, { useContext } from 'react'
import "./sidebar.css"

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemSecurityUpdateWarningIcon from '@mui/icons-material/SystemSecurityUpdateWarning';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

// import {DashboardIcon, GroupIcon, AddBusinessIcon, ShoppingCartCheckoutIcon, LocalShippingIcon, BarChartIcon, NotificationsNoneIcon, SystemSecurityUpdateWarningIcon, EngineeringIcon, SettingsIcon, PersonIcon,  LogoutIcon } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeCtx';

const Sidebar = () => {
  const {dispatch } = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">DigitalBod</span>
          </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <DashboardIcon  className="icon"/>
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
            <li>
              <GroupIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
            <li>
              <AddBusinessIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ShoppingCartCheckoutIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USES</p>
          <li>
            <BarChartIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SYSTEM</p>
          <li>
            <SystemSecurityUpdateWarningIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <EngineeringIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <PersonIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          <div title='Light (Default) Mode' className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
          <div title='Dark Mode' className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
          {/* <div className="colorOption"></div> */}
      </div>
    </div>
  )
}

export default Sidebar