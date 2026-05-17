import { Box, Button, Grid, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';

export const Form = () => {
  return (
    <Stack gap={16}>
      <Text fw="bold" size="lg">
        فرم دریافت مشاوره
      </Text>
      <Text>
        برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید تا مشاوران ما به صورت
        کاملان رایگان شمارا راهنمایی کنند.
      </Text>
      <Box
        bg="white"
        p={40}
        style={{ borderRadius: 8, border: '1px solid #E3E3E3', textAlign: 'start' }}
      >
        <form>
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                label="نام و نام خانوادگی خود را وارد کنید"
                placeholder="نام و نام خانوادگی"
                radius="lg"
                variant="filled"
                leftSection={<IconUserCircle color="#E13333" />}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                label="آدرس ایمیل خود را وارد کنید"
                placeholder="مثلا email@mail.com"
                radius="lg"
                variant="filled"
                leftSection={<IconUserCircle color="#E13333" />}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                label="شماره تماس خود را وارد کنید"
                placeholder="مثلا 091212345678"
                radius="lg"
                variant="filled"
                leftSection={<IconUserCircle color="#E13333" />}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <Textarea
                radius="lg"
                variant="filled"
                label="در مورد درخواست خود برای ما بنویسید."
                placeholder="توضیحات (اختیاری)"
                resize="vertical"
              />
            </Grid.Col>
            <Button mx={'auto'} mt="md" radius="lg" bg="gray" w={300}>
              ثبت درخواست
            </Button>
          </Grid>
        </form>
      </Box>
    </Stack>
  );
};
