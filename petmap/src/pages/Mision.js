import React from 'react';
import '../styles/Mision.less';
import dog from '../images/dog1.png';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {Col, Layout, Row} from "antd";
import {YoutubeOutlined} from "@ant-design/icons";
const {Header, Footer, Content} = Layout;

const Mision = () => {

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
                    <div className="row con">
                        <div className="col-5">
                            <img src={dog}/>
                        </div>
                        <div className="col-6">
                            <h1>¿QUIENES SOMOS?</h1>
                            <p>PETMAP es una idea que nació gracias al amor por los animales de un grupo de estudiantes de la Escuela Politécnica Nacional.</p>
                            <p>Promovemos la protección y adopción de animales mediante la aplicación "PET MAP" y la conciencia de la comunidad sobre el respeto que merecen y se debe tener hacia las demás especies.</p>
                            <br/>
                            <h1>MISIÓN</h1>
                            <p>Ser una organización autosustentable, reconocida como referencia nacional en el bienestar y protección animal, responsable del cambio en la relacion humana - animal en el Ecuador, Coordinaciones en la ciudad de Quito y sus alrededores.</p>
                            <p>Cada animalito que se encuentre sin un hogar, brindarle cariño, comida y un techo donde vivir, es nuestra misión. </p>
                            <h1>VISIÓN</h1>
                            <p>Para el año 2025 PET MAP aspira ser una herramienta reconocida y aceptada a nivel Nacional y de esta manera haber logrado una reducción en la problematica</p>
                            <p>que involucra a los animalitos de la calle.</p>

                        </div>
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
}

export default Mision;