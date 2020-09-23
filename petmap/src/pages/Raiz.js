import React, {useState} from 'react';
import "../styles/Raiz.less";
import {Modal, Button, Col, Row, Typography, message, Layout,Carousel} from "antd";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import FormRegistro from "../components/FormRegistro";
import FIREBASE from "../firebase";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {YoutubeOutlined} from "@ant-design/icons";
import carrusel1 from "../images/Logo.PNG";
import carrusel2 from "../images/carrusel2.jpg"
import carrusel3 from "../images/carrusel3.jpg"
import carrusel4 from "../images/carrusel4.jpg"
const {Title} =Typography;
const {Header, Footer, Content} = Layout;

const Raiz = () => {


    const [ modalVisible, setModalVisible ] = useState( false );

    const handleVisibleModal = () => {
        setModalVisible(true);
    };

    const handleCreateUser = async( values ) => {
        try {

           const user = await FIREBASE.auth.createUserWithEmailAndPassword(values.email, values.password);
           delete values.password;

           await FIREBASE.db.ref( `users/${user.uid}`) .push( values)

           console.log('values', values);


        message.success( 'Los datos se guardaron correctamente :)' );
    }catch (error){
        message.error(error.message)
        }
    }

    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',


    };
    return(
        <>
            <Layout className="Layout">
                <Header className='main-header'>
                    <div className='logo'>
                        <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                    </div>
                    <div className="headerPet">
                        <Title className='title1'>PET  MAP</Title>
                    </div>
                </Header>
            <Content className='main-content mb-3'>
                <Row>
                    <Col span = {12}>
                        <div className="carru">
                            <div className="boxCarru">
                            <Carousel className="minGalery" autoplay>
                                <div>
                                    <h3 style={contentStyle}><img src={carrusel1} alt="Carrusel"/></h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}><img src={carrusel2} alt="Carrusel"/></h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}><img src={carrusel3} alt="Carrusel"/></h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}><img src={carrusel4} alt="Carrusel"/></h3>
                                </div>
                            </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span = {12}>
                        <div className='box'>
                            <div className='boxCenter'>
                                <Title className='title2'>PET  MAP</Title>
                                <Title level = {2} className='title3 '>TU ACCIÓN PUEDE CAMBIAR VIDAS</Title>

                                <Button type="btn btn-access" shape="round" onClick={handleVisibleModal}>REGISTRARSE</Button><br/><br/>
                                <Modal
                                    title='Registro '
                                    visible={ modalVisible }
                                    onRegistrar={ () => setModalVisible( false ) }
                                    onCancel={ () => setModalVisible( false ) }
                                    width={ 900 }
                                    footer={ null }
                                    destroyOnClose
                                >
                                    <div className="formuRegistro">
                                        <FormRegistro onRegister={handleCreateUser}/>
                                    </div>

                                </Modal>

                                <Button type="btn btn-access" shape="round" >
                                    <Link to={Routes.INICIOSESION} >INICIAR SESIÓN</Link>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
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
export default Raiz;



