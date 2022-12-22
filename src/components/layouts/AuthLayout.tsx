import { AppShell, Burger, Center, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import { Outlet } from '@tanstack/react-location';
import { useState } from 'react';

export const AuthLayout = () => {
  return (
    <AppShell>
      <Center>
        <Outlet />
      </Center>
    </AppShell>
  );
};
