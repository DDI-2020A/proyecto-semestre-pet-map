import React from 'react';
import {Card, Col, Row, paragraph, Typography, Button} from 'antd';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
const { Title } = Typography;

const style = { background: 'none', padding: '8px 0' };

const Donacionestransferencia = () => (
    <div>
        <Link to={Routes.DONACIONES}><Title>DONACIONES</Title></Link>
        <Title>Donaciones Transferencia o Déposito</Title>

        <Row>
            <Col span={12} offset={6}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div style={style}>
                    <p>las donaciones voluntarias de cualquier valor son bienvenidas.</p>
                    <p>Lo importante de PET MAP, es ayudar a los animales para que tengan un hogar.</p>
                    <p>Puedes realizar tus donaciones via TRANSFERENCIA o DÉPOSITO a las cuentas a nombre de PET MAP</p>
                    <p><ul>
                        <li ><a href="https://www.pichincha.com/portal/inicio" >BANCO PICHINCHA (CTA XXX-XXX-XXX)</a></li>
                        <li><a href= "https://www.bancodelpacifico.com/personas/inicio">BANCO PACÍFICO (CTA XXX-XXX-XXX)</a>></li>
                        <li><a href= "https://www.bolivariano.com/">BANCO BOLIVARIANO (CTA XXX-XXX-XXX)</a></li>
                        <li><a href= "https://www.produbanco.com.ec/banca-minorista/cuentas/">BANCO PRODUBANCO (CTA XXX-XXX-XXX)</a></li>
                    </ul></p>

                </div>
            </Col>
        </Row>

        <Row>
            <Col span={12} offset={6}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div style={style}>

                    <h3>Otro tipo de donaciones</h3>
                    <Link to={Routes.DONACIONESFISICAS}><Button type="primary" className='buttonoption'>Donaciones Físicas</Button></Link>
                    <Link to={Routes.DONACIONESDEBITO}><Button type="primary" className='buttonoption' >Donaciones Débito Bancario</Button></Link>

                </div>
            </Col>
        </Row>
    </div>

);

export default Donacionestransferencia;