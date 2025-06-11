import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import Signup from "../../pages/notesAuth/signup";
import { RouteConstants } from "../RouteConstants";

export const SignupRoutes : RouteObject = {
    path : RouteConstants.SignupRoutes.SIGNUP_PAGE,
    children : [
        {
            element : (
                <Suspense fallback={<p>Loading</p>}>
                    <Signup/>
                </Suspense>
            ),
            index : true
        }
    ]
}