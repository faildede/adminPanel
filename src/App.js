import { useState } from 'react';
import { Routes, Route, Router } from "react-router-dom";
import './App.css';
import LoginForm from './Auth/LoginForm';
import RegisterForm from './Auth/Register';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./scenes/global/Topbar";
import Sidebars from './scenes/global/Sidebars'
import {Box, } from '@mui/material';
import Dashboard from "./scenes/dashboard";
// import Team from './scenes/team'
import Form from './scenes/form/'
import Calendar from './scenes/calendar';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app flex" >
        <Sidebars className="block" isSidebar={isSidebar}/>
          <main className='content w-full'>
            <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/form" element={<Form />} />
              </Routes>
          </main>
        </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
