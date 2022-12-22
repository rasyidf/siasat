
import { ColorScheme, ColorSchemeProvider, Global, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { ReactLocation, Router } from '@tanstack/react-location';
import { ReactNode, StrictMode } from 'react';
import { hashHistory } from './hashHistory';
import { routes } from './routes/index';
// Set up a ReactLocation instance with the memory history
const location = new ReactLocation({
  history: hashHistory,
});

const THEME_KEY = 'mantine-color-scheme';
function App(): JSX.Element {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
  ]);
  return (
    <StrictMode>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{
          colorScheme,
          fontFamily: 'Nunito, sans serif',
          headings: { fontFamily: 'Montserrat, sans serif' },
        }}
          withGlobalStyles withNormalizeCSS>
          <Global
            styles={(theme) => ({
              body: {
                color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[8],
                fontSize: 15,
              },
            })}
          />
          <Router location={location} routes={routes} />
        </MantineProvider>
      </ColorSchemeProvider>
    </StrictMode>);
}

export default App;
