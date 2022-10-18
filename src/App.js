import './App.css';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='main'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
