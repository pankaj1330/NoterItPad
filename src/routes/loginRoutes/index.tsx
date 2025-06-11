import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import Login from "../../pages/notesAuth/login";
import { RouteConstants } from "../RouteConstants";

export const loginRoutes : RouteObject = {
    path: RouteConstants.LoginRoutes.LOGIN_PAGE,
    children: [
        {
            element: (
                <Suspense fallback={<p>Loading</p>}>
                    <Login/>
                </Suspense>
            ),
            index: true,
        }
    ]
}