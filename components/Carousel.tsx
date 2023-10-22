import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../public/IIITLlogo.png";
import styles from './ControlledCarousel.module.css'; 
import Slider from '../components/Slider.module.css'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=" bg-gray-300">
    <div className={Slider.container}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={Slider.sliderItem}>
        <img
          src="data:image/jpeg;base64,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"
          alt="First slide"
          className={styles.carouselImage}
          height={10} width={900} 
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item >
      <Carousel.Item className={Slider.sliderItem}>
        <img
          src="data:image/jpeg;base64,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"
          alt="Second slide"
          className={styles.carouselImage}
          height={20} width={800} 
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className={Slider.sliderItem}>
        <img
          src="data:image/jpeg;base64,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"
          alt="Third Slide"
          className={styles.carouselImage}
          height={20} width={800} 
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default ControlledCarousel;