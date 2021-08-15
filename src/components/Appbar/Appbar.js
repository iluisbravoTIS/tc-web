import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Settings from '../../providers/settings';

const Styles = styled.div`
    .logoBrand{ 
        /* margin: 5px; */
        height: 50px;
        width: 100%;
    }

    .bgOrange{
        background-color: #CE7344;
        color: #FFF !important;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #FFF !important;
    }
    .menu-right{
        text-align: right;
    }
    a{
        font-size: large;
    }
`;

const Appbar = () => {
    let Logo = "/assets/tc-logo.png";

    return (
        <Styles>
            {/* <Navbar className="bgOrange" expand="lg">

                <Navbar.Brand href="#home">
                    <img alt="logo.png" src={Logo} className="logoBrand" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Cotizar</Nav.Link>
                        <Nav.Link href="#link">Ubicación</Nav.Link>
                        <Nav.Link href="#link">Instagram</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar> */}
            
            <Navbar className="bgOrange" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img alt="logo.png" src={Logo} className="logoBrand" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#"><Link to="Cotizar" smooth={true} duration={100}>Cotizar</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="Ubicacion" smooth={true} duration={100}>Ubicación</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="Instagram" smooth={true} duration={100}>Instagram</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="Contacto" smooth={true} duration={100}>Contacto</Link></Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Cotizar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Ubicación</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>                                
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </Styles>
    );
}

export default Appbar;