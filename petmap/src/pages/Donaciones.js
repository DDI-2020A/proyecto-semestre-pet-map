import React from "react";
import { Card, Col, Row} from 'antd';
import img1 from "../images/perrodonaciones.svg";
import img2 from "../images/gatodonaciones.svg";
import { Button } from 'antd';

import Routes from "../constants/routes";
import {Link} from 'react-router-dom';
import "../styles/donaciones.less";





const Donaciones = () => (

    <div className="site-card-wrapper">
        <Row gutter={16}>
            <Col span={8}>
                    <img src={img1} alt="perrodonaciones"/>
            </Col>
            <Col span={8}>
                    <h1>DONACIONES</h1>
                    <Link to={Routes.DONACIONESFISICAS}><Button type="primary" className='buttonoption'>Donaciones físicas</Button></Link>
                    <Link to={Routes.DONACIONESTRANSFERENCIA}><Button type="primary" className='buttonoption'>Donaciones Transferencia bancaria</Button></Link>
                    <Link to={Routes.DONACIONESDEBITO}><Button type="primary" className='buttonoption' >Donaciones Débito Bancario</Button></Link>
                    <paragraph classname='paragraphfrase'>A veces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar seria menos si le faltara esa gota</paragraph>
                    <paragraph>(Madre Teresa de Calcuta).</paragraph>
            </Col>
            <Col span={8}>
                    <img src={img2} alt="gatodonaciones"/>
            </Col>
        </Row>
    </div>
);

export default Donaciones;
