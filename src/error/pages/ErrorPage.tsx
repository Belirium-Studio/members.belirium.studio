import { Flex, Text, Title } from "@mantine/core";
import AppLayout from "../../common/layout/AppLayout";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
    const {t} = useTranslation();
    useEffect(() => {
        document.title = `${t("error")} - ${t("title")}`;
    }, []);
    return (
        <AppLayout>
            <Flex h={`calc(100vh - 2 * var(--app-shell-padding))`} align="center" justify="center" pos="relative" direction="column" gap="xl">
                <Title order={1}>
                    {t("ouch")}
                </Title>
                <Text ta="center">
                    {t("loading_error")}<br/>
                    {t("page_doesnt_exist")}
                </Text>
            </Flex>
        </AppLayout>
    )
}