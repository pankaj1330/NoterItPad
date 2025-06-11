import { createBrowserRouter } from "react-router-dom";
import { loginRoutes } from "./loginRoutes";
import { SignupRoutes } from "./signupRoutes";
import { HomeRoutes } from "./homeRoutes";

export const router = createBrowserRouter([
    {
        path : '/',
        children : [
            loginRoutes,
            SignupRoutes,
            HomeRoutes,
        ]
    }
])