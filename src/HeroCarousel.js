import { Button } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import LoadingButton from './LoadingButton';

function HeroCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ filter: "brightness(0.7)" }}
          src="./Images/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Welcome to <span style={{color: "#E9D758"}}>Adventurers!</span></h1>
          <h5>Ready for an Adventure?</h5>
          <LoadingButton/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ filter: "brightness(0.7)" }}
          src="./Images/3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Welcome to <span style={{color: "#E9D758"}}>Adventurers!</span></h1>
          <h5>
            Ready for an Adventure?
          </h5>
          <LoadingButton />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;