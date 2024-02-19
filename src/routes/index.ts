import { useRoutes } from "react-router-dom";
import { AllLessons } from "./AllLessons.routes";
import { ProjectRoutes } from "./ProjectRouts.routes";
import { EntryPoints } from "./EntryPointRoutes.routes";


export default function Allrouts(){
    return useRoutes([EntryPoints,AllLessons,ProjectRoutes])
}
