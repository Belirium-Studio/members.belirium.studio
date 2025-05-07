import Atropos from "atropos/react";
import classes from "./CardBack.module.css";
import { QRCodeSVG } from "qrcode.react";
import { Flex } from "@mantine/core";

export default function CardBack({id, w, h}: {
    id: string,
    h: number,
    w: number
}) {
    return (
        <Atropos innerClassName={classes.card_background} style={{
            width: w,
            height: h
        }}>
            <Flex h={h} w={w} align="center" justify="center">
                <QRCodeSVG size={h * 0.6} value={`https://members.belirium.studio/${id}`} marginSize={2} bgColor="#ffffff" fgColor="#d10000" level="H" imageSettings={{
                    src: "/static/logo.png",
                    excavate: true,
                    height: h * 0.1,
                    width: h * 0.1
                }}/>
            </Flex>
        </Atropos>
    )
}