import React from 'react';
import { Col, Row, Typography, Button} from 'antd';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import  "../styles/DonacionesTransferencia.less";
const { Title } = Typography;
const style = { background: 'none', padding: '8px 0' };

const Donacionestransferencia = () => (
    <div>
        <Link to={Routes.DONACIONES}><Title className='donationtitle'>DONACIONES</Title></Link>
        <Title>Donaciones Transferencia o Déposito</Title>

        <Row>
            <Col span={12} offset={6}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div >
                    <p className='paragraph'>Las donaciones voluntarias de cualquier valor son bienvenidas.</p>
                    <p className='paragraph'>Lo importante de PET MAP, es ayudar a los animales para que tengan un hogar.</p>
                    <p className='paragraph'>Puedes realizar tus donaciones via TRANSFERENCIA o DÉPOSITO a las cuentas a nombre de PET MAP</p>
                    <p className='paragraph'><ul>
                        <li ><a href="https://www.pichincha.com/portal/inicio" className='bank'>Banco Pichincha (CTA XXX-XXX-XXX)</a></li>
                        <li ><a href= "https://www.bancodelpacifico.com/personas/inicio">Banco Pacífico (CTA XXX-XXX-XXX)</a></li>
                        <li ><a href= "https://www.bolivariano.com/">Banco Bolivariano (CTA XXX-XXX-XXX)</a></li>
                        <li ><a href= "https://www.produbanco.com.ec/banca-minorista/cuentas/">Banco Produbanco (CTA XXX-XXX-XXX)</a></li>

                    </ul></p>

                </div>
            </Col>
        </Row>

        <Row>
            <Col span={12} offset={6}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div >

                    <h4 className='secondtitle'>Otro tipo de donaciones</h4>
                    <Link to={Routes.DONACIONESFISICAS}><Button type="primary" className='buttonopt'>Donaciones Físicas</Button></Link>
                    <Link to={Routes.DONACIONESDEBITO}><Button type="primary" className='buttonopt' >Donaciones Débito Bancario</Button></Link>

                </div>
            </Col>
        </Row>
    </div>

);

export default Donacionestransferencia;