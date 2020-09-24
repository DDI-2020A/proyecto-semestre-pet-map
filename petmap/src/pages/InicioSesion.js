import React from "react";
import "../styles/InicioSesion.less";
import {Col, Row, Form, Input, Button, Checkbox, Typography, Layout, message} from "antd";
import imgP from "../images/logo.svg";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {YoutubeOutlined} from "@ant-design/icons";
import FIREBASE from "../firebase";
import {useHistory} from "react-router";

const { Title } = Typography;
const {Header, Footer, Content} = Layout;


const InicioSesion = () =>{

    const history = useHistory();
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const handleLogin = async( { email, password } ) => {
        try {
            await FIREBASE.auth.signInWithEmailAndPassword( email, password );
            // history.push( Routes.HOME );
            history.push( Routes.HOME );

        } catch( error ) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;

            message.error( error.message );
        }
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
                    <Col span = {15}>
                        <div className='imgPp'>
                            <img src={imgP} alt="Logo"/>
                        </div>
                    </Col>
                    <Col span = {9}>
                        <div className='box'>
                            <Form

                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={handleLogin}
                            >
                                <Title className='titlePI'>Inicio de Sesión</Title>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'El email ingresado no es válido',
                                        },
                                        {
                                            required: true,
                                            message: 'Ingrese un email válido',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Contraseña"
                                    name="password"
                                    rules={[{ required: true, message: 'Ingrese una contraseña' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item  name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item >
                                    <Button type="btn btn-access" className="sesion" htmlType="submit">
                                        Iniciar Sesión
                                    </Button>
                                </Form.Item>

                                <Form.Item >
                                    <Button className="link" type="link" htmlType="submit">
                                        ¿Olvidaste tu contraseña?
                                    </Button>
                                </Form.Item>

                            </Form>
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

export default InicioSesion;