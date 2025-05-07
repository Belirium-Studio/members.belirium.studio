import Atropos from "atropos/react";
import classes from "./CardFront.module.css";
import { Flex, Image, Text } from "@mantine/core";
import type Member from "../../common/types/Member";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function CardFront({member, id, w, h}: {
    id: string,
    member: Member,
    h: number,
    w: number
}) {
    const {t} = useTranslation();
    return (
        <Atropos innerClassName={classes.card_background} style={{
            width: w,
            height: h
        }}>
            <Flex className={classes.card_title} pos="absolute" top={0.047 * h} h={0.201 * h} w={w} justify="center" align="center" gap={w * 0.055}>
                <Image src="/static/logo.png" h={h * 0.15} w={h * 0.15} />
                <Text fz={`${h * 0.103}px`} fw={700} c="white" tt="uppercase">
                    {t("belirium_studio")}
                </Text>
            </Flex>
            <Image className={classes.card_image} pos="absolute" left={w * 0.099} top={h * 0.334} w={h * 0.426} h={h * 0.426} src={`/static/${id}/image.png`} style={{
                borderWidth: `${h * 0.011}px`
            }}/>
            <Text pos="absolute" left={w * 0.420} top={h * 0.306} fz={`${h * 0.113}px`} fw={600} c="white">
                {member.name}
            </Text>
            <Text pos="absolute" left={w * 0.420} top={h * 0.458} fz={`${h * 0.053}px`} fw={600} c="#ffd700" tt="uppercase">
                {t("member_id")}
            </Text>
            <Text pos="absolute" left={w * 0.420} top={h * 0.523} fz={`${h * 0.069}px`} fw={600} c="#ffd700">
                {id}
            </Text>
            <Text pos="absolute" left={w * 0.420} top={h * 0.616} fz={`${h * 0.053}px`} fw={600} c="#ffd700" tt="uppercase">
                {t("membership_date")}
            </Text>
            <Text pos="absolute" left={w * 0.420} top={h * 0.680} fz={`${h * 0.069}px`} fw={600} c="white">
                {moment(member.date).format(t("date_format"))}
            </Text>
            <Flex className={classes.card_footer} pos="absolute" top={0.839 * h} h={0.161 * h} w={w} justify="center" align="center">
                <Text fz={`${h * 0.091}px`} fw={600} c="white">
                    {member.status}
                </Text>
            </Flex>
        </Atropos>
    )
}