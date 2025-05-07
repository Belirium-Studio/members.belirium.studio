import { useLoaderData, useParams } from "react-router"
import type { MemberLoaderData } from "../../router/loaders/memberLoader"
import { Box, Flex, Transition } from "@mantine/core";
import AppLayout from "../../common/layout/AppLayout";
import { useElementSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import CardFront from "../components/CardFront";
import CardBack from "../components/CardBack";

const CARD_WIDTH = 85.60;
const CARD_HEIGHT = 53.98;
const RADIUS = 3;

const TRANSITION_DURATION = 150;
const BETWEEN_TRANSITIONS_DELAY = 50;

export default function MemberPage() {
    const params = useParams();
    const {member} = useLoaderData() as MemberLoaderData;
    const {ref, width, height} = useElementSize();
    const h = Math.min(638 * (CARD_HEIGHT / CARD_WIDTH), height, width * (CARD_HEIGHT / CARD_WIDTH));
    const w = Math.min(638, width, height * (CARD_WIDTH * CARD_HEIGHT));
    const [transitioning, setTransitioning] = useState(false);
    const [showFront, setShowFront] = useState(true);
    const [showBack, setShowBack] = useState(false);
    const beginTransition = () => {
        if (transitioning) {
            return;
        }
        const setShowCurrent = showFront ? setShowFront : setShowBack;
        const setShowNext = showBack ? setShowFront : setShowBack;
        setTransitioning(true);
        setShowCurrent(false);
        setTimeout(() => {
            setShowNext(true);
            setTimeout(() => {
                setTransitioning(false);
            }, TRANSITION_DURATION);
        }, TRANSITION_DURATION + BETWEEN_TRANSITIONS_DELAY);
    };
    useEffect(() => {
        document.title = `${member.name} - Belirium Studio Members`;
    }, []);
    return (
        <AppLayout>
            <Flex ref={ref} h="calc(100vh - 2 * var(--app-shell-padding))" align="center" justify="center" pos="relative">
                <Box h={h} w={w} style={{
                    "--card-border-radius": `${RADIUS * (w / CARD_WIDTH)}px`
                }} onClick={beginTransition}>
                    <Transition mounted={showFront} duration={TRANSITION_DURATION} transition="fade-up">
                        {styles => (
                            <Box h={h} w={w} style={styles}>
                                <CardFront id={params.member as string} member={member} h={h} w={w}/>
                            </Box>
                        )}
                    </Transition>
                    <Transition mounted={showBack} duration={TRANSITION_DURATION} transition="fade-up">
                        {styles => (
                            <Box h={h} w={w} style={styles}>
                                <CardBack id={params.member as string} h={h} w={w}/>
                            </Box>
                        )}
                    </Transition>
                </Box>
            </Flex>
        </AppLayout>
    )
}