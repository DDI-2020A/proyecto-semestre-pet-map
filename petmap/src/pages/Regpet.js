import React from 'react';
import { Form, Input, InputNumber, Button , Layout} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const Regpet = () => {

    const onFinish = values => {
        console.log(values);
    };

    return (
        <>
            <Layout>
                    <Header>AYUDA A UN NUEVO AMIGO A CONSEGUIR UN HOGAR</Header>
                    <Layout>
                        <Sider>
                            <Button typr="primary">Cargar foto</Button>
                        </Sider>
                        <Content>
                            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                <Form.Item name={['user', 'tipo']} label="Tipo: " rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['user', 'estado']} label="Estado: ">
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['user', 'direccion']} label="Direccion: " rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['user', 'descripcion']} label="Descripcion: ">
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Button type="primary" htmlType="submit">
                                        Registrar
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Content>
                    </Layout>
                </Layout>

        </>
    );
};

export default Regpet;