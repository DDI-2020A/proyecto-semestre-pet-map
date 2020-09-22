import React, { useState } from 'react';
import {Form,Input,message,Select,Checkbox,Button,AutoComplete,} from 'antd';

const { Option } = Select;

const FormRegistro = ({onRegister}) => {


    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="593">+593</Option>
            </Select>
        </Form.Item>
    );


    return (
        <Form
            name="register"
            onFinish={onRegister}
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
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                ]}

            >
                <Checkbox>
                    Aceptar <a href="">terminos y condiciones</a>
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="btn btn-access" shape="round" htmlType="submit" >
                    Registrar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormRegistro;

