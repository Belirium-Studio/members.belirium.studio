import AppLayout from "../../common/layout/AppLayout.tsx";
import {Flex, Loader} from "@mantine/core";

export default function LoadingPage() {
    return (
        <AppLayout>
            <Flex h={`calc(100vh - 2 * var(--app-shell-padding))`} align="center" justify="center" pos="relative">
                <Loader color="#d10000" type="bars"/>
            </Flex>
        </AppLayout>
    )
}