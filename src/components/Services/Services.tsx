import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ActionIcon, Container, Stack, Text } from '@mantine/core';
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';
import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Card } from '../Common/Card/Card';
import classes from './Services.module.css';
const services = [
  {
    imgUrl: './images/services/1.png',
    title: 'نگرانی از هزینه‌های تبلیغات',
    description:
      'برخی افراد ممکن است تصور کنند که تبلیغات هزینه‌بر است؛ اما پرشین سایت با ارائه سود بالا، این هزینه‌ها را جبران می‌کند.',
  },
  {
    imgUrl: './images/services/2.png',
    title: 'ترس از پیچیدگی مدیریت',
    description:
      'مدیران ممکن است نگران دشواری مدیریت کمپین‌ها باشند، اما ما تمامی فرآیندها را به ساده‌ترین شکل ممکن ارائه می‌دهیم.',
  },
  {
    imgUrl: './images/services/3.png',
    title: 'تصور زمان‌بر بودن نتایج',
    description:
      'برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.',
  },
  {
    imgUrl: './images/services/4.png',
    title: 'ناآگاهی از تأثیر تبلیغات',
    description:
      ' بسیاری از افراد نمی‌دانند که کمپین‌های تبلیغاتی چگونه می‌توانند منجر به افزایش فروش شوند؛ ما این تأثیرات را به وضوح برای شما نمایش خواهیم داد.',
  },
  {
    imgUrl: './images/services/5.png',
    title: 'نبود استراتژی مشخص',
    description:
      'نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.',
  },
  {
    imgUrl: './images/services/6.png',
    title: 'عدم تخصص تیم در تبلیغات',
    description:
      'اگر تیم شما تجربه کافی در زمینه تبلیغات ندارد، ما تمامی فرآیندها را به صورت حرفه‌ای و با کیفیت بالا انجام خواهیم داد.',
  },
  {
    imgUrl: './images/services/7.png',
    title: 'دغدغه هدر رفتن بودجه',
    description:
      ' اگر نگران عدم کسب نتیجه هستید، پرشین سایت با برنامه‌ریزی دقیق به شما اطمینان می‌دهد که از بودجه خود به بهترین نحو استفاده خواهید کرد.',
  },
  {
    imgUrl: './images/services/8.png',
    title: 'نداشتن برنامه برای رشد',
    description:
      'اگر استراتژی مشخصی برای رشد ندارید، پرشین سایت نقشه راه جامعی برای شما طراحی خواهد کرد.',
  },
];

export const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={classes.gradientSec}>
      <Container size="xl">
        <Stack pos="relative" gap={8}>
          <Text c="white" size="lg" my={16} fw="bold">
            موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
          </Text>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView="auto"
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ width: '100%' }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }

              if (swiper.navigation) {
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {services.map((i) => (
              <SwiperSlide key={i.title} className={classes.slide}>
                <Card imgUrl={i.imgUrl} title={i.title} description={i.description} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom navigation buttons */}
          <ActionIcon
            variant="default"
            ref={prevRef}
            visibleFrom="md"
            style={{
              position: 'absolute',
              left: '-12px',
              top: '60%',
              zIndex: 10,
            }}
          >
            <IconCaretLeftFilled />
          </ActionIcon>

          <ActionIcon
            ref={nextRef}
            variant="default"
            visibleFrom="md"
            style={{
              position: 'absolute',
              right: '-12px',
              top: '60%',
              zIndex: 10,
            }}
          >
            <IconCaretRightFilled />
          </ActionIcon>
        </Stack>
      </Container>
    </div>
  );
};
