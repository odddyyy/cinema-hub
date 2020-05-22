import React from 'react'
import { Carousel } from 'react-bootstrap'

//banners
import banner1 from '../assets/img/carousel/1.jpg'
import banner2 from '../assets/img/carousel/2.jpg'
import banner3 from '../assets/img/carousel/3.jpg'
import banner4 from '../assets/img/carousel/4.jpeg'
import banner5 from '../assets/img/carousel/5.jpg'

export default function Banner() {
    return (
        <Carousel className="mt-4" style={styles.box} controls={false}>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={banner1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={banner2}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={banner3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={banner4}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={banner5}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
    )
}

const styles = {
    box: { boxShadow:'3px 3px 10px black, 3px 3px 10px black', borderRadius:'1%' }
}
