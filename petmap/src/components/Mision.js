import React from 'react';
import logo from '../images/logo.svg';
import {Layout, Menu, Row, Col, Button,Typography} from 'antd';
import '../styles/Mision.css';
import dog from '../images/dog1.png';

const { Footer } = Layout;

const Mision = () => {

  return (
      <>
      <div className="fondo"></div>
        <div className="row conten">
            <div className="col-6">
                <img src={dog}/>
            </div>
            <div className="col-6">
                <h1>MISION</h1>
                <p>Promovemos la protecciòn y adopcion de animales mediante la aplicacion de PET MAP y la conciencia de la comudad en el respeto que merecen y se debe tener hacia las demas especies.</p>
                <p>Cada animalito que se encuentre sin un hogar que le brinde cariño, comida y un techo donde vivir deberia encontrar un hogar. </p>
                <br/>
                <h1>VISION</h1>
                <p>Ser una organizaciòn autosusteble, reconocida como referencia nacional en el bienestar animal, responsable del cambio en la relacion humana -animal en el Ecuador, Coordinaciones en la ciudad de Quito y sus alrededores.</p>
            </div>
        </div>
          <Footer className= 'main-footer'>
              <div >Pet Map - Derechos reservados 2020</div>
          </Footer>
      </>
  );
}

export default Mision;
