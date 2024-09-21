import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Auth from "../pages/auth/Auth";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Register from "../pages/Auth/components/Register";

const AppRouter = () => {
  const { currentUser } = useAuth();

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/auth" replace />;
    }
    return children;
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            currentUser ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <div className="text-center">
              <p>This page does not exist.</p>
              <a href="/">Go back to home</a>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
