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
                    <div>

                        <Row justify='space-around' align='middle' className='home'>

                            <Col><span><strong>
                <img className='adoptame' src={img3} alt="adoptame"/>
            </strong></span>
                            </Col>
                            <Col ><span><strong>
                <Link to={Routes.DONACIONES}><Button type="primary" className='buttonoption'>Donaciones</Button></Link>
                <Link to={Routes.ADOPCIONES}><Button type="primary" className='buttonoption'>Adopción</Button></Link>
                <Link to={Routes.REGISTROANIMAL}><Button type="primary" className='buttonoption' >Registro Animal</Button></Link>
            </strong></span>
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

export default Home;