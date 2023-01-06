import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export class Slider extends Component {
    render() {
        return (
            <div>
<Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1671106046art%20fair1671106046.png"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1671105988plakshathon1671105988.png"
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1671106046art%20fair1671106046.png"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

            </div>
        )
    } 
}

export default Slider