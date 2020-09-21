import React from 'react';
import  "../styles/DonacionesDebito.less";
import {Button,Col, Row,Typography} from 'antd';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
const { Title } = Typography;



const Donacionesdebito = () => (

    <div>
        <Link to={Routes.DONACIONES}><Title className='firsttitle'>DONACIONES</Title></Link>
        <Title className='firsttitle'>Débito Automático</Title>

        <Row >
            <Col span={15} offset={5}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <div  >
                    <p className='paragraph'>Una de las formas simples y seguras de realizar donaciones a PET MAP, es llenar una autorización de débito automático
                    para que tu banco pueda debitar una sola vez o mensualmente de tu cuenta o tarjeta de crédito, y acredite inmediatamente esos fondos a las cuentas de PET MAP.</p>
                    <p className='paragraph'>Recuerda que ninguna  persona esta autorizada, aunque tenga una credencial de PET MAP,a recaudar dinero directamente, ayúdanos
                        a evitar el fraude denunciándolo a:</p>

                    <Row span={15} offset={4}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col  >
                            <p className='paragraph'>
                            <ul >
                                <li >guillermo.rivera@epn.edu.ec</li>
                                <li >yomara.diaz@epn.edu.ec</li>
                                <li >elvis.agila@epn.edu.ec</li>
                                <li >carlos.montesdeoca@epn.edu.ec</li>
                            </ul>
                            </p>
                        </Col>
                    </Row>
                    <h3 className='subtitle'>Monto a donar</h3>
                    <Button type="primary" className='buttonopt'>$20</Button>
                    <Button type="primary" className='buttonopt'>$40</Button>
                    <Button type="primary" className='buttonopt'>$60</Button>
                    <h3 className='subtitle'>Otras Donaciones</h3>
                    <Link to={Routes.DONACIONESTRANSFERENCIA}><Button type="primary" className='buttonopt'>Donaciones Transferencia bancaria</Button></Link>
                    <Link to={Routes.DONACIONESFISICAS}><Button type="primary" className='buttonopt' >Donaciones Físicas</Button></Link>
                </div>
            </Col>
        </Row>
    </div>


);

export default Donacionesdebito;