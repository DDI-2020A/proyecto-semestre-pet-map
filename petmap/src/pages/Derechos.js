import React from "react";
import  { Typography} from "antd";
//import Routes from "../constants/routes";
import '../styles/derechos.less';
import {Col, Layout, Row} from "antd";
import {YoutubeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
const {Title} =Typography;

//const {paragraph} =Typography;
const {Header, Footer, Content} = Layout;

const derechos = () => {
    return (
        <>
            <Layout className="Layout">
                <Header className='main-header'>
                    <div className='logo'>
                        <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                    </div>
                    <Navigation />
                </Header>
                <Content className='main-content mb-3'>
                <div className="main_donations">
                    <Title  className='title1'>DERECHO ANIMAL</Title>
                    <Title className='seconttitle'>REGLAMENTO NACIONAL DE TENDENCIA DE PERROS</Title>

                    <p className='paragraph'>En febrero de 2009, se elaboró el Acuerdo Interministerial para la Tenencia Responsable de Perros, el cual entró en vigencia en agosto del mismo año.
                    </p>
                    <p className='paragraph'>En sus puntos principales el reglamento establece:</p>

                    <Title  className='title2'>OBLIGACIONES</Title>

                    <p className='paragraph'>
                        <ul>
                            <li>Otorgar condiciones de vida adecuadas a las características del animal.</li>
                            <li>Educar, socializar e interactuar con el perro en la comunidad.</li>
                            <li>Mantener únicamente el número de perros que las normas de bienestar animal permiten.</li>
                            <li>Recoger y disponer sanitariamente los desechos del animal.</li>
                            <li>Cuidar que los perros no causen molestias a los vecinos.</li>
                            <li>Entre otras.</li>
                            </ul>
                        </p>

                    <Title  className='title2'>PROHIBICIONES</Title>

                    <p className='paragraph'>
                        <ul>
                            <li>Maltratar, golpear o someter al animal.</li>
                            <li>Abandonar o mantener en estado de aislamiento.</li>
                            <li>Encadenar, enjaular o confinar permanententemente en terrazas, patios, balcones.</li>
                            <li>Envenenar masivamente perros propios o ajenos.</li>
                            <li>Usar la imagen de perros para simbolizar maldad, agresiva o peligrosa.</li>
                            <li>Entre otras.</li>
                        </ul>
                    </p>
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

export default derechos;