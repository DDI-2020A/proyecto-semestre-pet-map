import React, {useState} from 'react';
import "../styles/Raiz.less";
import {Modal, Button, Col, Row, Typography, message, Layout, Carousel, Form, Input, Checkbox} from "antd";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import FIREBASE from "../firebase";
import Logo from "../images/logo.svg";
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
    const handleNoVisibleModal = () => {
        setModalVisible(false);
    };

    const handleCreateUser = async( values ) => {
        try {

           const user = await FIREBASE.auth.createUserWithEmailAndPassword(values.email, values.password);
           delete values.password;
           delete values.confirm;
            if( user ) {


                await FIREBASE.db.ref( `users/`) .push( values)

                console.log( 'user', user );
                //console.log( 'uid', uid );
            }


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

            <Content className='main-content mb-3'>
                <Row> <Header className='main-header'>
                    <div className='logo'>
                        <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                    </div>
                    <div className="headerPet">
                        <Title className='title1'>PET  MAP</Title>
                    </div>
                </Header>
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

                                <Button type="btn btn-access" className="ini" shape="round" onClick={handleVisibleModal}>REGISTRARSE</Button><br/><br/>
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
                                        <Form
                                            name="register"
                                            onFinish={handleCreateUser}
                                            scrollToFirstError
                                        >
                                            <Form.Item
                                                name="email"
                                                label="E-mail"
                                                rules={[
                                                    {
                                                        type: 'email',
                                                        message: 'Ingrese un correo válido',
                                                    },
                                                    {
                                                        required: true,
                                                        message: 'Ingrese su e-mail',
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                name="password"
                                                label="Contraseña"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your password!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password />
                                            </Form.Item>

                                            <Form.Item
                                                name="confirm"
                                                label="Confirmar Contraseña"
                                                dependencies={['password']}
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Confirme su contraseña',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(rule, value) {
                                                            if (!value || getFieldValue('password') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject('Las contraseñas no coinciden');
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input.Password />
                                            </Form.Item>

                                            <Form.Item
                                                name="nombre"
                                                label="Nombre"

                                                rules={[{ required: true, message: 'Por favor ingrese su nombre!', whitespace: true }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name="apellido"
                                                label="Apellido"
                                                rules={[{ required: true, message: 'Por favor ingrese su apellido!', whitespace: true }]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                name="telefono"
                                                label="Teléfono"
                                                rules={[{ required: true, message: 'Por favor ingrese su teléfono!' }]}
                                            >
                                                <Input maxLength={10}  style={{ width: '100%' }} />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="btn btn-access" shape="round" htmlType="submit" onClick={handleNoVisibleModal} >
                                                    Registrar
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>

                                </Modal>

                                <Button type="btn btn-access" className="ini" shape="round" >
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



