import "./styles/Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">lamadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon/>
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsIcon/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon/>
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamIcon/>
            <span>System Health</span>
          </li>
          <li>
            <DisplaySettingsIcon/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon/>
            <span>Settings</span>
          </li>
          <li>
            <ManageAccountsIcon/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">Color Options</div>
    </div>
  );
};

export default Sidebar;
