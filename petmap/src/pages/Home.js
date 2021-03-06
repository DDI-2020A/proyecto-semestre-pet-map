import React from 'react';
import {Col, Row, Button, Layout} from 'antd';
import img3 from "../images/adoptame.svg";
import img2 from "../images/gatodonaciones.svg";
import "../styles/Home.less";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {YoutubeOutlined} from "@ant-design/icons";

const {Header, Footer, Content} = Layout;


const Home = () => {
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
                    <div align='middle' className="conteinerhome">
                        <Row >
                            <Col span={15} offset={5}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Row justify='space-around' align='middle' className='home'>
                            <Col span={12}>
                                <img className='adoptame' src={img3} alt="adoptame"/>

                            </Col>
                            <Col span={12}>
                                <div className="btn-group-vertical">
                                <Link to={Routes.DONACIONES}><Button type="btn btn-access" className='buttonoptionh'>Donaciones</Button></Link>
                                <Link to={Routes.ADOPTA}><Button type="btn btn-access" className='buttonoptionh'>Adopción</Button></Link>
                                <Link to={Routes.REGISTROANIMAL}><Button type="btn btn-access" className='buttonoptionh' >Registro Animal</Button></Link>
                                </div>
                            </Col>
                        </Row>

                            </Col>
                        </Row>
                        <p>Te felicitamos por tu decisión de adoptar un perro, sé que lo atenderás como un miembro más de la familia, paso a paso
                            con su tierna mirada conquistara tu corazón. Estamos orgullosos de ti, por contribuir a mejorar su calidad de vida.</p>

                        <p> Queremos desearte muchas felicidades por adoptar a una mascota. Esperamos que tengas momentos maravillosos
                            con tu peludo amigo y que sus ladridos inunden tu hogar de alegrías.</p>
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

export default Home;