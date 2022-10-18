import useLocalStorage from 'use-local-storage';

import './App.css';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className='main'>
      <Header onToggleTheme={toggleTheme} myTheme={theme} />
      <Hero myTheme={theme} />
      <Footer myTheme={theme} />
    </div>
  );
}

export default App;
