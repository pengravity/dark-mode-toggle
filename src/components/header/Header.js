import './Header.css';
import logo from '../../assets/logo.png';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const Header = ({ myTheme, onToggleTheme }) => {
  return (
    <header data-theme={myTheme}>
      <div className='container  --flex-between'>
        <div className='logo'>
          <img src={logo} alt='logo' width={100} />
        </div>
        <nav>
          <ul className='--flex-between'>
            <li>
              <a href='#'>Home</a>
              <a href='#'>About</a>
            </li>
          </ul>
        </nav>
        <div onClick={onToggleTheme}>
          <span className='toggle-btn'>
            <BsFillMoonFill size={30} color='pink' />
            <BsFillSunFill size={30} color='yellow' />
            <div className='ball'></div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
