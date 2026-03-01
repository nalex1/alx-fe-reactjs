import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile Dashboard</h2>
      <nav>
        <Link to="">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}