// App.tsx
import { ActionIcon, Anchor, Box, Button, Group } from '@mantine/core';
import { IconMenu2, IconSearch, IconUser } from '@tabler/icons-react';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <Box className={classes.navbar}>
      <Group gap="xs">
        <Group hiddenFrom="md">
          <ActionIcon variant="transparent" c="dark" size="lg" radius="md">
            <IconMenu2 />
          </ActionIcon>
        </Group>
        <Button variant="subtle" c="dark" bg="#ECECEC" radius="lg" px="lg">
          logo
        </Button>
      </Group>
      <Group gap="xl" visibleFrom="md">
        <Anchor href="#" underline="hover" c="dark">
          خانه
        </Anchor>
        <Anchor href="#" underline="hover" c="dark">
          طراحی سایت
        </Anchor>
        <Anchor href="#" underline="hover" c="dark">
          کمپین‌های بازاریابی و تبلیغاتی
        </Anchor>
        <Anchor href="#" underline="hover" c="dark">
          اتوماسیون و بازاریابی
        </Anchor>
        <Anchor href="#" underline="hover" c="dark">
          تولید محتوا
        </Anchor>
        <Anchor href="#" underline="hover" c="dark">
          سئو
        </Anchor>
        <Anchor href="#" underline="hover" c="dark">
          تماس با ما
        </Anchor>
      </Group>

      <Group gap="xs">
        <ActionIcon variant="default" size="lg" radius="md">
          <IconSearch />
        </ActionIcon>
        <ActionIcon variant="default" size="lg" radius="md">
          <IconUser />
        </ActionIcon>
      </Group>
    </Box>
  );
}
