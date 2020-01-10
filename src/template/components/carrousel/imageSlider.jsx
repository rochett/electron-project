import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-alice-carousel/lib/alice-carousel.css";
import Image from 'react-bootstrap/Image';
import firebase from "firebase/app";

export default function Gallery() {

    const [carrossel, setCarrossel] = useState([]);
    const [itemsInSlide, setItemsInSlide] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() => {

        firebase.database().ref('filmes/').on('value', function (_carrossel) {
            setCarrossel(_carrossel.val());
        });
    }, []);

    var filtered = carrossel && carrossel.filter(function (el) {
        return el != null;
    });

    const responsive = {
        0: { items: 3 },
        1024: { items: 9 },
    }

    const handleOnSlideChange = (event) => {
        const { itemsInSlide, item } = event
        setItemsInSlide(itemsInSlide);
        setItem(item);
    }

    return (
        <AliceCarousel
            items={filtered && filtered.map((text, i) => <Image src={text.cartaz} key={i} width="170" height="250" rounded title={text.titulo} />)}
            responsive={responsive}
            autoPlayInterval={4000}
            autoPlayDirection="rtl"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={true}
            playButtonEnabled={false}
            disableAutoPlayOnAction={false}
            dotsDisabled={true}
            onResized={handleOnSlideChange}
            buttonsDisabled={true}
        />
    );
}
