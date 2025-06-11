import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import Home from "../../pages/Home";
import { RouteConstants } from "../RouteConstants";

export const HomeRoutes : RouteObject = {
    path : RouteConstants.HomeRoutes.HOME_PAGE,
    children : [
        {
            element : (
                <Suspense fallback={<p>Loading</p>}>
                    <Home />
                </Suspense>
            ),
            index : true
        }
    ]
}