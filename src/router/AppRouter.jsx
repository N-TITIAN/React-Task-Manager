import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

const routes = [
  { element: <Dashboard />, path: "/" },
  { element: <Login />, path: "/login" },
  { element: <div>404 - Page Not Found</div>, path: "*" },
];
    
const AppRouter = createBrowserRouter(routes);

export default AppRouter;
