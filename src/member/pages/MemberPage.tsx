import { useLoaderData, useParams } from "react-router"
import type { MemberLoaderData } from "../../router/loaders/memberLoader"
import { Box, Flex, Image, Text } from "@mantine/core";
import AppLayout from "../../common/layout/AppLayout";
import { useElementSize } from "@mantine/hooks";
import Atropos from "atropos/react";
import classes from "./MemberPage.module.css";
import moment from "moment";

const CARD_WIDTH = 85.60;
const CARD_HEIGHT = 53.98;
const RADIUS = 3;

export default function MemberPage() {
    const params = useParams();
    const {member} = useLoaderData() as MemberLoaderData;
    const {ref, width, height} = useElementSize();
    const h = Math.min(638 * (CARD_HEIGHT / CARD_WIDTH), height, width * (CARD_HEIGHT / CARD_WIDTH));
    const w = Math.min(638, width, height * (CARD_WIDTH * CARD_HEIGHT));
    return (
        <AppLayout>
            <Flex ref={ref} h="calc(100vh - 2 * var(--app-shell-padding))" align="center" justify="center" pos="relative">
                <Box h={h} w={w} style={{
                    "--card-border-radius": `${RADIUS * (w / CARD_WIDTH)}px`
                }}>
                    <Atropos innerClassName={classes.member_card_front} style={{
                        width: w,
                        height: h
                    }}>
                        <Flex className={classes.card_title} pos="absolute" top={0.047 * h} h={0.201 * h} w={w} justify="center" align="center" gap={w * 0.055}>
                            <Image src="/static/logo.png" h={h * 0.15} w={h * 0.15} />
                            <Text fz={`${h * 0.103}px`} fw={700} c="white">
                                BELIRIUM STUDIO
                            </Text>
                        </Flex>
                        <Image className={classes.card_image} pos="absolute" left={w * 0.099} top={h * 0.334} w={h * 0.426} h={h * 0.426} src={`/static/${params.member}/image.png`} style={{
                            borderWidth: `${h * 0.011}px`
                        }}/>
                        <Text pos="absolute" left={w * 0.420} top={h * 0.306} fz={`${h * 0.113}px`} fw={600} c="white">
                            {member.name}
                        </Text>
                        <Text pos="absolute" left={w * 0.420} top={h * 0.458} fz={`${h * 0.053}px`} fw={600} c="#ffd700">
                            NUMÉRO DE MEMBRE
                        </Text>
                        <Text pos="absolute" left={w * 0.420} top={h * 0.523} fz={`${h * 0.069}px`} fw={600} c="#ffd700">
                            {params.member}
                        </Text>
                        <Text pos="absolute" left={w * 0.420} top={h * 0.616} fz={`${h * 0.053}px`} fw={600} c="#ffd700">
                            DATE D'ADHÉSION
                        </Text>
                        <Text pos="absolute" left={w * 0.420} top={h * 0.680} fz={`${h * 0.069}px`} fw={600} c="white">
                            {moment(member.date).format("DD/MM/YYYY")}
                        </Text>
                        <Flex className={classes.card_footer} pos="absolute" top={0.839 * h} h={0.161 * h} w={w} justify="center" align="center">
                            <Text fz={`${h * 0.091}px`} fw={600} c="white">
                                {member.status}
                            </Text>
                        </Flex>
                    </Atropos>
                </Box>
            </Flex>
        </AppLayout>
    )
}