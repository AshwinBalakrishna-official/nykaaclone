import React from "react";
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./images/car1.jpg";
import img2 from "./images/car2.gif";
import img3 from "./images/car3.jpg";
import img4 from "./images/car4.jpg";

class Carousels extends React.Component{
    render(){
        return(
            <Container fluid className="w-100">
            <Carousel fade >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img4}
                alt="Fourth slide"
                />
            </Carousel.Item>
            </Carousel>
            </Container>
        );
    }
}
export default Carousels;