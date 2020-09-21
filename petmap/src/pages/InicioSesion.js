import React from "react";

import "../styles/InicioSesion.less";
import { Col, Row,Form, Input, Button, Checkbox,Typography} from "antd";
import imgP from "../images/logo.svg";

const { Title } = Typography;


const InicioSesion = () =>{

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return(
        <>
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
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
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
                                <Button type="primary" htmlType="submit">
                                    Iniciar Sesión
                                </Button>
                            </Form.Item>

                            <Form.Item >
                                <Button type="link" htmlType="submit">
                                    ¿Olvidaste tu contraseña?
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                </Col>
            </Row>
        </>

    );

}

export default InicioSesion;

