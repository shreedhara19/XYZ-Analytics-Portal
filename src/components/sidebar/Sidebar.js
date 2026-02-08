import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <nav className="sidebar-nav">
        <Link to="/">Home</Link>
        <Link to="/sales">Sales</Link>
        <Link to="/quality">Quality</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
