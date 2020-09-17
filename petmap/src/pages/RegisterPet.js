import React from 'react';
import '../styles/RegisterPet.less'
import { Form, Input, InputNumber, Button , Layout} from 'antd';

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

const RegisterPet = () => {

    const onFinish = values => {
        console.log(values);
    };

    return (
        <>
        <div className="main-reg">
            <div className=" title-reg"><h3> AYUDA A UN NUEVO AMIGO A CONSEGUIR UN HOGAR </h3></div>
            <div className="row">
                <div className="col-5 photo">
                    <Button type="btn btn-access">Cargar foto</Button>
                </div>
                <div className="col-7 form-reg">
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={['user', 'tipo']} label="Tipo: " rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'estado']} label="Estado: " rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'direccion']} label="Direccion: " rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'descripcion']} label="Descripcion: " rules={[{ required: true }]}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="btn btn-access" htmlType="submit">
                                Registrar
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>

        </>
    );
};

export default RegisterPet;