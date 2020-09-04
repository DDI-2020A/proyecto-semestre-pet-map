import React from 'react';
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

                        <Link to={Routes.REGISTER}><Button type="primary" shape="round" >
                            REGISTRARSE
                        </Button></Link><br/><br/>
                        <Button type="primary" shape="round" >
                            INICIAR SESIÓN
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>

    </div>
);

export default Raiz;

