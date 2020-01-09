import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-alice-carousel/lib/alice-carousel.css";
import Image from 'react-bootstrap/Image';
import { titulo_secao } from '../../../configapp';

class Gallery extends React.Component {
    state = {
        galleryItems: [require('../../../image/slider3.png'), 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => <Image src={i} key={i} width="150" height="250" rounded />),
    }

    responsive = {
        0: { items: 3 },
        1024: { items: 8 },
    }

    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }

    handleOnSlideChange = (event) => {
        const { itemsInSlide, item } = event
        this.setState({ itemsInSlide, currentIndex: item })
    }

    render() {
        return (
            <AliceCarousel
                items={this.state.galleryItems}
                responsive={this.responsive}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                playButtonEnabled={false}
                disableAutoPlayOnAction={true}
                onSlideChange={this.onSlideChange}
                onSlideChanged={this.onSlideChanged}
                dotsDisabled={true}
                onResized={this.handleOnSlideChange}
                buttonsDisabled={true}
            />
        )
    }
}

export default Gallery