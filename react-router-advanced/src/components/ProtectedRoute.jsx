import { Navigate } from "react-router-dom";

/* Auth logic included directly inside this file */
function useAuth() {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}