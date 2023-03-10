import React, { useMemo, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';



export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: "#1976d2"
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            main: "#1976d2"
          },
          text: {
            primary: grey[100],
            secondary: grey[500],
          },
        }),
  },
});




function App() {


  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode],
  );
  
  
  return (
    <ColorModeContext.Provider value={colorMode}>
    
      <div className={`App ${mode === "dark" ? "dark-mode": ""} `}>
        <ThemeProvider theme={theme}>
        <Navbar />
        <AppRouter />
        </ThemeProvider>
      </div>
    </ColorModeContext.Provider>

  );
}

export default App;
