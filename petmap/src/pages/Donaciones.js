import React from "react";
import { Card, Col, Row } from 'antd';
import img1 from "../images/perrodonaciones.svg";
import img2 from "../images/gatodonaciones.svg";
import { Button } from 'antd';
import donaciones from "../styles/donaciones.css";



const Adopciones = () => (

    <div className="site-card-wrapper">
        <Row gutter={16}>
            <Col span={8}>
                <Card  className='card '>
                    <img src={img1} alt="perrodonaciones"/>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="DONACIONES"  className='cardopction '>
                    <Row gutter={16}>
                        <Col span={8}><Button type="primary">Donaciones físicas</Button></Col>
                        </Row>
                    <Row gutter={16}>
                        <Col span={8}><Button type="primary">Transferencia Bancaria</Button></Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}><Button type="primary">Débito bancario</Button></Col>
                    </Row>

                </Card>
            </Col>
            <Col span={8}>
                <Card  className='card '>
                    <img src={img2} alt="gatodonaciones"/>
                </Card>
            </Col>
        </Row>
    </div>


);

export default Adopciones;
