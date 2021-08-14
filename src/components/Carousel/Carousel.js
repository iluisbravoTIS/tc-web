import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .height img{         
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }
`;


const CarouselComponent = () => {
    const foto1 = "./assets/estudio1.jpeg";
    const foto2 = "./assets/estudio2.jpeg";
    const foto3 = "./assets/estudio3.jpeg";


    return (

        <Styles>
            <Carousel className="height" fade>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto2}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=""
                        src={foto3}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </Styles>
    );
}
export default CarouselComponent;