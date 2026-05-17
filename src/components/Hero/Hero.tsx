import { Button, Grid, Stack, Text } from '@mantine/core';
import classes from './Hero.module.css';

export const Hero = () => {
  return (
    <Grid align={'start'}>
      <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 0 }}>
        <Stack gap={16} className={classes.heroTxt}>
          <h3>کمپین‌های بازاریابی و تبلیغاتی</h3>
          <Stack gap={12}>
            <Stack gap={4}>
              <Text>
                آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما به شما کمک
                می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را بردارید!
              </Text>
            </Stack>
            <Text>جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید</Text>
          </Stack>
          <Button w="max-content">دریافت مشاوره</Button>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 0, md: 1 }}>
        <img src="./images/hero.png" className={classes.heroImg} />
      </Grid.Col>
    </Grid>
  );
};
