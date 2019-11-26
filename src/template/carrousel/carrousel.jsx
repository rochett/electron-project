import React, { useState }  from 'react';
import { Carousel } from 'react-bootstrap';
import { slider_pagina } from '../../configapp';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider_pagina.imagem_slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{slider_pagina.titulo_slider1}</h3>
            <p>{slider_pagina.subtitulo_slider1}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider_pagina.imagem_slider2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>{slider_pagina.titulo_slider2}</h3>
            <p>{slider_pagina.subtitulo_slider2}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider_pagina.imagem_slider3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>{slider_pagina.subtitulo_slider3}</h3>
            <p>
            {slider_pagina.subtitulo_slider3}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  //render(<ControlledCarousel />);
  export default ControlledCarousel;