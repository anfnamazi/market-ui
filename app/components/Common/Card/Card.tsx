"use client";

import { Stack, Text } from "@mantine/core";

type Props = {
    title: string;
    imgUrl: string;
    description: string;
};
export const Card = (props: Props) => {
    return (
        <div
            className="px-4 py-4 md:py-6 bg-white w-full h-52 md:h-56 rounded-lg"
            style={{ border: "1px solid #E3E3E3" }}
        >
            <Stack gap={8} align="center">
                <img style={{ marginBottom: 8 }} width={56} height={56} src={props.imgUrl} />
                <Text fz="sm" fw="bold">
                    {props.title}
                </Text>
                <Text fz="xs">{props.description}</Text>
            </Stack>
        </div>
    );
};
