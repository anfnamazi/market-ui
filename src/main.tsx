// main.tsx
import { DirectionProvider, MantineProvider, type MantineThemeOverride } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';

export const customTheme: MantineThemeOverride = {
  primaryColor: 'violet',
  primaryShade: 9,
};

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <DirectionProvider>
      <MantineProvider theme={customTheme}>
        <App />
      </MantineProvider>
    </DirectionProvider>
  </HashRouter>
);
