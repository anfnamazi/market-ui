import { Button, Stack, Text } from "@mantine/core";
import classes from "./Hero.module.css";

export const Hero = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                    <Stack gap={16} className={classes.heroTxt}>
                        <h3>کمپین‌های بازاریابی و تبلیغاتی</h3>
                        <Stack gap={12}>
                            <Stack gap={4}>
                                <Text>
                                    آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره
                                    رایگان ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین
                                    حالا قدم اول را بردارید!
                                </Text>
                            </Stack>
                            <Text>جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید</Text>
                        </Stack>
                        <Button w="max-content">دریافت مشاوره</Button>
                    </Stack>
                </div>
                <div className="col-span-12 md:col-span-6 order-1 md:order-2 mx-auto">
                    <img src="./images/hero.png" className={classes.heroImg} />
                </div>
            </div>
        </div>
    );
};
