import type { RouteObject } from "react-router";
import MemberPage from "../member/pages/MemberPage";
import { memberLoader } from "./loaders/memberLoader";
import LoadingPage from "../loading/pages/LoadingPage";

export const routes: RouteObject[] = [
    {
        path: ":member",
        loader: memberLoader,
        element: <MemberPage/>,
        hydrateFallbackElement: <LoadingPage/>
    }
];