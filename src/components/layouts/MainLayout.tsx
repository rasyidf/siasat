import { useMantineTheme, AppShell, Header, MediaQuery, Burger, Navbar, Text, NavLink, Title, Badge, Group } from '@mantine/core';
import { Link, Outlet, useLocation } from '@tanstack/react-location';
import { CaretRight } from 'phosphor-react';
import { useState } from 'react';
import { staffMenu, parentMenu, studentMenu, UrlToColor, UrlToName, studentSecondaryMenu, parentSecondaryMenu, staffSecondaryMenu } from '../../routes/menus';

const NavVariations: Record<string, { Primary: Array<any>, Secondary: Array<any>; }> = {
  student: { Primary: studentMenu, Secondary: studentSecondaryMenu },
  parent: { Primary: parentMenu, Secondary: parentSecondaryMenu },
  staff: { Primary: staffMenu, Secondary: staffSecondaryMenu },
};





export const MainLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  // get current path from react-location
  const { current: { pathname } } = useLocation();
  const currentPath = pathname.split('/')[2];
  const child = pathname.split('/')[3] || "home";
  console.log(currentPath);
  console.log(child);
  const NavsItems = NavVariations[currentPath] || { Primary: [], Secondary: [] };
  const NavItemAsNode = NavsItems?.Primary?.map((item) => {
    return (
      <NavLink
        key={`${item.name}-${item.path}`}
        label={item.name}
        icon={item.icon}
        component={Link}
        to={item.path}
        rightSection={item.children && <CaretRight size={12} weight="regular" />}
      />
    );
  });

  const SecondaryNavItemAsNode = NavsItems?.Secondary?.map((item) => {
    return (
      <NavLink
        key={`${item.name}-${item.path}`}
        label={item.name}
        icon={item.icon}
        component={Link}
        to={item.path}
        rightSection={item.children && <CaretRight size={12} weight="regular" />}
      />
    );
  });


  return (
    <AppShell layout="alt"
      header={
        <Header height={{ base: 48, md: 64 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Title order={3} color="dark">{UrlToName[child] ?? ""}</Title>
          </div>
        </Header>
      }
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 320 }}>
          <Navbar.Section>
            <Group mb={16}>
              <Text size="xl" weight={500} color="dark">
                SIASAT
              </Text>
              <Badge radius={'sm'} color={UrlToColor[currentPath]}>
                {UrlToName[currentPath] ?? "Beranda"}
              </Badge>
            </Group>
          </Navbar.Section>
          <Navbar.Section grow mt="md">
            {NavItemAsNode}
          </Navbar.Section>
          <Navbar.Section>
            {SecondaryNavItemAsNode}
          </Navbar.Section>
        </Navbar>

      }
    >
      <Outlet />
    </AppShell>
  );
};
