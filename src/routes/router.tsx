import { createBrowserRouter, Navigate } from "react-router-dom";
import { loginRoutes } from "./loginRoutes";
import { SignupRoutes } from "./signupRoutes";
import { HomeRoutes } from "./homeRoutes";
import ProtectedRoute from "./ProtectedRoutes";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Navigate to="/notes" replace />
    },
    {
        path : '/',
        children : [
            loginRoutes,
            SignupRoutes,
        ]
    },
    {
        path : '/',
        element: <ProtectedRoute />,
        children : [
            HomeRoutes,
        ]
    }
])