
import { Outlet } from "react-router-dom";
import { AllMyLessons } from "../pages/lessons/AllMyLessons";


export let AllLessons={
    path:'/all-lessons',
    element:<><Outlet/></>,
    children:[
        { 
            path:'all',
            element:<AllMyLessons/>
    }
       
    ]
}