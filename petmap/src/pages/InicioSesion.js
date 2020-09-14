import React from "react";

import "../styles/InicioSesion.less";
import { Col, Row,Form, Input, Button, Checkbox,Typography} from "antd";
import imgP from "../images/Logo.PNG";

const { Title } = Typography;


const InicioSesion = () =>{

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };


    return(
    <div>
        <Row>
            <Col span = {15}>
                <div className='imgPp'>
                    <img src={imgP} alt="Logo"/>
                </div>
            </Col>
            <Col span = {9}>
                <div className='box'>



                        <Form

                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Title className='titlePp'>Inicio de Sesión</Title>
                            <Form.Item
                                label="Email"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Contraseña"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
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

    </div>

    );

}

export default InicioSesion;