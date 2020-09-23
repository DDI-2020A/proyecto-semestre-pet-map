import React from 'react';
import {Col, Row, Typography, Button, Layout} from "antd";
import {PhoneOutlined, YoutubeOutlined} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import  "../styles/don_fisica.less";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
const { Title } = Typography;
const {Header, Footer, Content} = Layout;


const Donacionesfisicas = () => {

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
                        <Title className='firsttitle'>Donaciones Físicas</Title>

                        <Row >
                            <Col span={15} offset={5}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <div  >
                                    <h3 className='subtitle'>Productos y Servicios</h3>
                                    <p className='paragraph'>Si deseas colaborar por medio de donaciones de insumo, productos y servicios,
                                        a continuación te detallamos algunas de las necesidades que tenemos:</p>
                                    <p className='paragraph'>Las principal necesidad que tenemos en PET MAP es alimento balanceado para
                                        los animales que necesitamos por lo cual que te solicitamos que sea esta la primera aportación que realices
                                        en favor de nuestras actividades</p>
                                    <p className='paragraph'>PET MAP requiere de más de una tonelada mensual de alimento, si te decides para ayudarnos con esto, toma en cuenta
                                        que es mejor que nos dones alimentos para cachorros, ya que este sirve para alimentar a los animales de toda edad y
                                        condición.</p>
                                    <h3 className='subtitle'>Insumos</h3>
                                    <p className='paragraph'>A continuación detallamos los insumos de nuestra necesidad:</p>
                                    <Row span={15} offset={4}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col  >
                                            <p className='paragraph'>
                                                <ul >
                                                    <li >Vacunas</li>
                                                    <li >Jeringuillas</li>
                                                    <li >Algodón</li>
                                                    <li >Alcohol</li>
                                                </ul>
                                            </p>
                                        </Col>
                                        <Col >
                                            <p className='paragraph'>
                                                <ul >
                                                    <li >Cepillos</li>
                                                    <li >Guantes</li>
                                                    <li >Mascarillas</li>
                                                    <li >Medicamento</li>
                                                </ul>
                                            </p>
                                        </Col>
                                    </Row>
                                    <h3 className='subtitle'>Servicios </h3>
                                    <p className='paragraph'>
                                        <lu >
                                            <li>Equipos de audio y video al aire libre.</li>
                                            <li>Transporte local.</li>
                                            <li>Transporte terreste nacional.</li>
                                            <li>Carpas.</li>
                                        </lu>
                                    </p >
                                    <p className='paragraph'>Por favor comunícate con nuestra clínica, para que puedas conocer las presentaciones que utilizamos en nuestros procesos.</p>
                                    <p className='paragraph'>
                                        <ul >
                                            <li ><PhoneOutlined classmate='callphone'/>0961628542 Yomara Díaz</li>
                                            <li ><PhoneOutlined classmate='callphone'/>0960625886 Guillermo Rivera</li>
                                            <li ><PhoneOutlined classmate='callphone'/>0997918338 Elvis Agila</li>
                                            <li ><PhoneOutlined classmate='callphone'/>0978885465 Carlos Montesdeoca</li>
                                        </ul></p>
                                    <h3 className='subtitle'>Otras Donaciones</h3>
                                    <Link to={Routes.DONACIONESTRANSFERENCIA}><Button type="btn btn-access" className='buttonoptdf'>Donaciones Transferencia bancaria</Button></Link>
                                    <Link to={Routes.DONACIONESDEBITO}><Button type="btn btn-access" className='buttonoptdf' >Donaciones Débito Bancario</Button></Link>
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

export default Donacionesfisicas;