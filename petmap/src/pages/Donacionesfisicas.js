import React from 'react';
import {Col, Row,Typography, Button} from "antd";
import {PhoneOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
const { Title } = Typography;

const style = { background: 'none', padding: '8px 0' };

const Donacionesfisicas = () => (
    <div>
        <Link to={Routes.DONACIONES}><Title>DONACIONES</Title></Link>
        <Title>Donaciones Físicas</Title>

        <Row>
            <Col span={15} offset={5}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div style={style}>
                    <h2>Productos y Servicios</h2>
                    <p>Si deseas colaborar por medio de donaciones de insumo, productos y servicios,
                        a continuación te detallamos algunas de las necesidades que tenemos:</p>
                    <p>Las principal necesidad que tenemos en PET MAP es alimento balanceado para
                        los animales que necesitamos por lo cual que te solicitamos que sea esta la primera aportación que realices
                    en favor de nuestras actividades</p>
                    <p>PET MAP requiere de más de una tonelada mensual de alimento, si te decides para ayudarnos con esto, toma en cuenta
                    que es mejor que nos dones alimentos para cachorros, ya que este sirve para alimentar a los animales de toda edad y
                    condición.</p>
                    <h3>Insumos</h3>
                    <p>A continuación detallamos los insumos de nuestra necesidad:</p>
                    <Row span={15} offset={4}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col >
                        <ul>
                            <li >Vacunas</li>
                            <li >Jeringuillas</li>
                            <li >Algodón</li>
                            <li >Alcohol</li>
                        </ul>
                        </Col>
                        <Col >
                            <ul>
                                <li >Cepillos</li>
                                <li >Guantes</li>
                                <li >Mascarillas</li>
                                <li >Medicamento</li>
                            </ul>
                        </Col>
                    </Row>
                    <h3>Servicios</h3>
                    <p>
                        <lu>
                            <li>Equipos de audio y video al aire libre.</li>
                            <li>Transporte local.</li>
                            <li>Transporte terreste nnacional.</li>
                            <li>Carpas</li>
                        </lu>
                    </p>
                    <p>Por favor comunícate con nuestra clínica, para que puedas conocer las presentaciones que utilizamos en nuestros procesos.</p>
                    <p>
                        <ul>
                        <li ><PhoneOutlined classmate='callphone'/>0961628542 Yomara Díaz</li>
                        <li ><PhoneOutlined classmate='callphone'/>0960625886 Guillermo Rivera</li>
                        <li ><PhoneOutlined classmate='callphone'/>0997918338 Elvis Agila</li>
                        <li ><PhoneOutlined classmate='callphone'/>0978885465 Carlos Montesdeoca</li>
                    </ul></p>

                </div>
            </Col>
        </Row>
    </div>
);

export default Donacionesfisicas;