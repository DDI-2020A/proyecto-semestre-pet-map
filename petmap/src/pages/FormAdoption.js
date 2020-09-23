/* import React from 'react';
import "../styles/forms.less";
import {Input, Button, Col, Layout, Row, Checkbox, Form, Select} from "antd";
import {Link} from 'react-router-dom';
import {EditOutlined, DingtalkOutlined, DeploymentUnitOutlined} from '@ant-design/icons';
import no from "../images/noIg.svg";

const {Content,Footer} = Layout;

const forms = () => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        <>
            <div className="main-reg">
                <div className=" title-reg"><h3> Registro de Adopción  <EditOutlined/></h3></div>
                <div className="row">
                    <div className="col-5 photo">
                        <img src={no} alt="adoption"/>
                    </div>
                    <div className="col-7 form-reg">
                        <Form
                            name='pet-form'
                            onFinish={handleSubmit}
                        >
                            <p>¿Ha tenido mascotas con aterioridad?</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='r1'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'Necesitamos conocer la respuesta'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="si">Si</Select.Option>
                                    <Select.Option value="no">No</Select.Option>
                                </Select>
                                <Input placeholder="en que calle se encontro al animalito"/>
                            </Form.Item>
                            <p>'¿Cuenta con los recursos necesarios para mantener saludable y contendo a su amscota?'</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='r2'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'Necesitamos conocer la respuesta'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="si">Si</Select.Option>
                                    <Select.Option value="no">No</Select.Option>
                                </Select>
                            </Form.Item>
                            <p>'¿Cuenta con los recursos necesarios para mantener saludable y contendo a su amscota?'</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='r3'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'Necesitamos conocer la respuesta'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="si">Si</Select.Option>
                                    <Select.Option value="no">No</Select.Option>
                                </Select>
                            </Form.Item>
                            <p>'¿Cuenta con los recursos necesarios para mantener saludable y contendo a su amscota?'</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='calle'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'este campo es requerido'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="si">Si</Select.Option>
                                    <Select.Option value="no">No</Select.Option>
                                </Select>
                                <Input placeholder="en que calle se encontro al animalito"/>
                            </Form.Item>
                            <p>'¿Cuenta con los recursos necesarios para mantener saludable y contendo a su amscota?'</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='descripcion'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'este campo es requerido'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="si">Si</Select.Option>
                                    <Select.Option value="no">No</Select.Option>
                                </Select>
                                <Input.TextArea placeholder="describe el aspecto del animalito"/>
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button className="submit-pet" type="primary" htmlType="submit">
                                    Registrar
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </div>
        </>

    );
}

export default forms;*/