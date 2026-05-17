import { Box, Stack, Text } from '@mantine/core';

type Props = {
  title: string;
  imgUrl: string;
  description: string;
};
export const Card = (props: Props) => {
  return (
    <Box
      px={16}
      py={{ base: 16, md: 24 }}
      bg="white"
      w={{ base: 230, md: 282 }}
      h={{ base: 198, md: 226 }}
      style={{ border: '1px solid #E3E3E3', borderRadius: 8 }}
    >
      <Stack gap={8} align="center">
        <img style={{ marginBottom: 8 }} width={56} height={56} src={props.imgUrl} />
        <Text fz="sm" fw="bold">
          {props.title}
        </Text>
        <Text fz="xs">{props.description}</Text>
      </Stack>
    </Box>
  );
};
