import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import firebase from "firebase/app";

export default function ControlledCarousel() {

  const [index, setIndex] = useState(0);
  const [carrossel, setCarrossel] = useState([]);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  useEffect(() => {

    firebase.database().ref('slider_principal/').on('value', function (_carrossel) {
      setCarrossel(_carrossel.val());
    });
  }, []);

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} style={{ marginTop: '56px' }}>
      {
        carrossel && carrossel.map((text, i) => <Carousel.Item key={i} > <img

          className="d-block w-100"
          src={require(`../../../image/${text.imagem_slider}`)}
          alt={text.titulo_slider}
        />
          <Carousel.Caption>
            <h3>{text.titulo_slider}</h3>
            <p>{text.subtitulo_slider}</p>
          </Carousel.Caption>
        </Carousel.Item>)
      }
    </Carousel>
  );
}