
import { Outlet } from "react-router-dom";
import { Login } from "../pages/projects/Login.page";
import { Home } from "../pages/projects/Home.page";
import { Register } from "../pages/projects/Register";

export let ProjectRoutes={
    path:'/project',
    element:<><Outlet/></>,
    children:[
        {
            path:'login',
            element:<Login/>

        },
        {
            path:'register',
            element:<Register/>

        },
        {
            path:'home',
            element:<Home/>

        }

    ]
}