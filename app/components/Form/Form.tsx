import { Button, Stack, Text, Textarea, TextInput } from "@mantine/core";
import { IconMail, IconPhone, IconUserCircle } from "@tabler/icons-react";

export const Form = () => {
    return (
        <div className="container mx-auto px-4">
            <Stack gap={16}>
                <Text fw="bold" size="lg">
                    فرم دریافت مشاوره
                </Text>
                <Text>
                    برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید تا
                    مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
                </Text>
                <div
                    className="bg-white p-10 rounded-lg text-start"
                    style={{ border: "1px solid #E3E3E3" }}
                >
                    <form>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-4">
                                <TextInput
                                    label="نام و نام خانوادگی خود را وارد کنید"
                                    placeholder="نام و نام خانوادگی"
                                    radius="lg"
                                    variant="filled"
                                    leftSection={<IconUserCircle color="#E13333" />}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <TextInput
                                    label="آدرس ایمیل خود را وارد کنید"
                                    placeholder="مثلا email@mail.com"
                                    radius="lg"
                                    variant="filled"
                                    leftSection={<IconMail color="#E13333" />}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <TextInput
                                    label="شماره تماس خود را وارد کنید"
                                    placeholder="مثلا 091212345678"
                                    radius="lg"
                                    variant="filled"
                                    leftSection={<IconPhone color="#E13333" />}
                                />
                            </div>
                            <div className="col-span-12">
                                <Textarea
                                    radius="lg"
                                    variant="filled"
                                    label="در مورد درخواست خود برای ما بنویسید."
                                    placeholder="توضیحات (اختیاری)"
                                    resize="vertical"
                                />
                            </div>
                            <div className="col-span-12 flex">
                                <Button mx={"auto"} mt="md" radius="lg" bg="gray" w={250}>
                                    ثبت درخواست
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Stack>
        </div>
    );
};
