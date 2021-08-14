import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';

import Appbar from './components/Appbar/Appbar';
import Carousel from './components/Carousel/Carousel';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Cotizar from './components/Cotizar/Cotizar';
import Instagram from './components/Instagram/Instagram';
import Contacto from './components/Contacto/Contacto';

import './App.css';

const Styles = styled.div`
    @import url(//db.onlinewebfonts.com/c/d21c922929b11ecc5b13a31ba5706e34?family=Caviar+Dreams);

    @font-face {font-family: "Caviar Dreams"; src: url("//db.onlinewebfonts.com/t/d21c922929b11ecc5b13a31ba5706e34.eot"); src: url("//db.onlinewebfonts.com/t/d21c922929b11ecc5b13a31ba5706e34.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/d21c922929b11ecc5b13a31ba5706e34.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/d21c922929b11ecc5b13a31ba5706e34.woff") format("woff"), url("//db.onlinewebfonts.com/t/d21c922929b11ecc5b13a31ba5706e34.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/d21c922929b11ecc5b13a31ba5706e34.svg#Caviar Dreams") format("svg"); }

    .body{
      font-family: "Caviar Dreams";
    }

    .green{
      color: #5B6E11;
    }

    .yellow{
      color: #E9CC64;
    }

    .sage{
      color: #B4AE82;
    }

    .bg-green{
      background-color: #5B6E11;
      color: #FFF;
    }

    .bg-yellow{
      background-color: #E9CC64;
      color: #FFF;
    }

    .bg-sage{
      background-color: #B4AE82;
      color: #FFF;
    }
`;

const App = () => {

  return (
    <>
      <Styles>
        <div className="body">
          <CssBaseline />

          <Appbar />
          <Carousel />
          <Cotizar />
          <Ubicacion />
          <Instagram />
          <Contacto />
        </div>
      </Styles>
    </>
  )
};

export default App;