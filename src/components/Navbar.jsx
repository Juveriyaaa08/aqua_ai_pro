import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Aqua AI</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/assistant">AI Assistant</Link>
        <Link to="/knowledge">Knowledge Hub</Link>
      </div>
    </nav>
  );
}

export default Navbar;