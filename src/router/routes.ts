import type { RouteObject } from "react-router";
import MemberPage from "../member/pages/MemberPage";
import { memberLoader } from "./loaders/memberLoader";
import LoadingPage from "../loading/pages/LoadingPage";
import ErrorPage from "../error/pages/ErrorPage";

export const routes: RouteObject[] = [
    {
        path: ":member",
        loader: memberLoader,
        Component: MemberPage,
        HydrateFallback: LoadingPage,
        ErrorBoundary: ErrorPage
    },
    {
        path: "*",
        Component: ErrorPage
    }
];