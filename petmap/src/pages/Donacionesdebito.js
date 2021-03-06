import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "../styles/DonacionesDebito.less";
import {Button, Col, Layout, Row, Typography} from 'antd';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {YoutubeOutlined} from "@ant-design/icons";
const { Title } = Typography;
const {Header, Footer, Content} = Layout;


const Donacionesdebito = () => {

    return(
    <>
        <Layout className="Layout">
            <Header className='main-header'>
                <div className='logo'>
                    <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                </div>
                <Navigation />
            </Header>
            <Content className='main-content mb-3'>
                <div>
                    <Link to={Routes.DONACIONES}><Title className='firsttitle'>DONACIONES</Title></Link>
                    <Title className='firsttitle'>Débito Automático</Title>

                    <Row>
                        <Col span={15} offset={5} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                            <div>
                                <p className='paragraph'>Una de las formas simples y seguras de realizar donaciones a
                                    PET MAP, es llenar una autorización de débito automático
                                    para que tu banco pueda debitar una sola vez o mensualmente de tu cuenta o tarjeta
                                    de crédito, y acredite inmediatamente esos fondos a las cuentas de PET MAP.</p>
                                <p className='paragraph'>Recuerda que ninguna persona esta autorizada, aunque tenga una
                                    credencial de PET MAP,a recaudar dinero directamente, ayúdanos
                                    a evitar el fraude denunciándolo a:</p>

                                <Row span={15} offset={4} gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                    <Col>
                                        <p className='paragraph'>
                                            <ul>
                                                <li>guillermo.rivera@epn.edu.ec</li>
                                                <li>yomara.diaz@epn.edu.ec</li>
                                                <li>elvis.agila@epn.edu.ec</li>
                                                <li>carlos.montesdeoca@epn.edu.ec</li>
                                            </ul>
                                        </p>
                                    </Col>
                                </Row>
                                <h3 className='subtitle'>Monto a donar</h3>


                                <a href="#windows1" className="btndebit" data-toggle="modal">$20</a>
                                <a href="#windows2" className="btndebit" data-toggle="modal">$40</a>
                                <a href="#windows3" className="btndebit " data-toggle="modal">$60</a>


                                <div className="modal" id="windows1" tabIndex="-1">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="modal-title">Donar a PET MAP</h3>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <h4>OBJETIVO: donar </h4>
                                                <h1>$20</h1>
                                                <div className="btn-group-vertical">
                                                <button type="btn btn-access" className='buttonoptdd'><a
                                                    href="https://www.paypal.com/ec/signin" className='bank'>PAY PAL</a>
                                                </button>
                                                <button type="btn btn-access" className='buttonoptdd'>Donar con una tarjeta
                                                </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="modal" id="windows2" tabIndex="-1">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="modal-title">Donar a PET MAP</h3>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <h4>OBJETIVO: donar </h4>
                                                <h1>$40</h1>
                                                <button type="btn btn-access" className='buttonoptdd'><a
                                                    href="https://www.paypal.com/ec/signin" className='bank'>PAY PAL</a>
                                                </button>
                                                <button type="btn btn-access" className='buttonoptdd'>Donar con una tarjeta
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="modal" id="windows3" tabIndex="-1">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="modal-title">Donar a PET MAP</h3>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <h4>OBJETIVO: donar </h4>
                                                <h1>$60</h1>
                                                <button type="primary" className='buttonoptdd'><a
                                                    href="https://www.paypal.com/ec/signin" className='bank'>PAY PAL</a>
                                                </button>
                                                <button type="primary" className='buttonoptdd'>Donar con una tarjeta
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <h3 className='subtitle'>Otras Donaciones</h3>
                                <Link to={Routes.DONACIONESTRANSFERENCIA}><Button type="primary"
                                                                                  className='buttonoptdd'>Donaciones
                                    Transferencia bancaria</Button></Link>
                                <Link to={Routes.DONACIONESFISICAS}><Button type="primary" className='buttonoptdd'>Donaciones
                                    Físicas</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer className= 'main-footer'>
            <Row justify='space-around' align="middle" className="footer">
                <Col><span><strong>EPN</strong></span></Col>
                <Col><span><strong>©Pet Map - Derechos reservados 2020</strong></span></Col>
                <Col><span><strong><a href="https://www.youtube.com/channel/UC45-ro1DxP89Pzf5-oEtLFg" ><YoutubeOutlined className="youtube"
                /></a></strong></span></Col>
            </Row>
            </Footer>
        </Layout>

    </>

);
            };

export default Donacionesdebito;