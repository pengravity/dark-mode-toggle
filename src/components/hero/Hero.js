import './Hero.css';
import HappyShop from '../../assets/happyShop.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container --grid-15 '>
        <div className='hero-text '>
          <h1>Visit Happy Shop</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget arcu quis eros sodales volutpat.{' '}
          </p>
          <div className='--flex-start'>
            <button className='--btn btn-p'>Learn More </button>
            <button className='--btn --btn-danger'>Sign Up </button>
          </div>
        </div>
        <div className='hero-image --text-center'>
          <img src={HappyShop} alt='shopping bags' width={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
