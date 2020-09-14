import React from 'react';
import "../styles/Raiz.less";
import  {Button, Col, Row, Typography,} from "antd";
import img1 from "../images/Captura1.svg";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";

const {Title} =Typography;



const Raiz = () => (
    <div>
        <Row>
            <Col span = {15}>
                <div className='imgPp'>
                    <img src={img1} alt="PerroGato"/>
                </div>
            </Col>
            <Col span = {9}>
                <div className='box'>
                    <div className='boxCenter'>
                        <Title className='title1'>PET  MAP</Title>
                        <Title level = {2} className='title2 '>TU ACCIÓN PUEDE CAMBIAR VIDAS</Title>

                        <Button type="primary" shape="round" >
                            REGISTRARSE
                        </Button><br/><br/>
                        <Button type="primary" shape="round" >
                            <Link to={Routes.INICIOSESION} >INICIAR SESIÓN</Link>
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>

    </div>
);

export default Raiz;

