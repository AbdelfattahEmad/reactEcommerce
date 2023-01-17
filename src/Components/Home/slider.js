import Carousel from 'react-bootstrap/Carousel';
import shoppinS from "../images/shoppinS.webp" 
import so from "../images/so.webp" 
import shosh from "../images/shosh.webp" 


function Slider() {
    return (
      <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shoppinS}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shop Now</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={so}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Offers</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shosh}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>sales</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

      </div>
    );
  }
  
  export default Slider;
  