 import { Navigate } from "react-router-dom";
  const isAuthenticated = false; // Replace with real authentication logic
  export default function ProtectedRoute({ children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }  