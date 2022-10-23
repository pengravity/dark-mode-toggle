import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

import './App.css';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import ThemeContext from './context/themeContext';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [move, setMove] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setMove(!move);
  };

  useEffect(() => {
    if (theme === 'dark') {
      setMove(true);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme, move }}>
      <div className='main'>
        <Header />
        <Hero />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
