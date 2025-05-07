import '@mantine/core/styles.css';
import "atropos/atropos.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import {routes} from "./router/routes";
import { createTheme, MantineProvider } from "@mantine/core";

export default function App() {
    const router = createBrowserRouter(routes);
    const theme = createTheme({
        fontFamily: '"Montserrat", sans-serif'
    });
    return (
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <RouterProvider router={router}/>
        </MantineProvider>
    )
};
