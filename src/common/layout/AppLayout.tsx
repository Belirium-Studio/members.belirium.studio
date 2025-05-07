import { AppShell } from "@mantine/core";
import type { ReactNode } from "react";

export default function AppLayout({children}: {
    children?: ReactNode
}) {
    return (
        <AppShell padding="md">
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    )
};