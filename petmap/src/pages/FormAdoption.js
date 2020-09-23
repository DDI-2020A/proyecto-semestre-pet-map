import React from 'react';
import "../styles/forms.less";
import {Input, Button, Col, Layout, Row, Checkbox, Form, Select} from "antd";
import {Link} from 'react-router-dom';
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {EditOutlined, DingtalkOutlined, DeploymentUnitOutlined, YoutubeOutlined} from '@ant-design/icons';
import no from "../images/noIg.svg";

const {Content,Footer,Header} = Layout;

const FormAdoption = () => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    const handleSubmit = () =>{}
    return (
        <>
            <Header className='main-header'>
                <div className='logo'>
                    <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                </div>
                <Navigation />
            </Header>

            <Content className='main-content mb-3'>
               <div className="main-reg">
                <div className="main-title"><h3> Registro de Adopción  <EditOutlined/></h3></div>
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
                            </Form.Item>
                            <p>¿Cuenta con los recursos necesarios para mantener saludable y contento a su mascota?</p>
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
                            <p>¿Le realiza el chequeo médico con regularidad?</p>
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
                            <p>¿Cuenta con el espacio suficiente en su vivienda para tener una mascota?</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='calle'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'necesitamos conocer la respueta'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="si">Si</Select.Option>
                                    <Select.Option value="no">No</Select.Option>
                                </Select>
                            </Form.Item>
                            <p>¿Cuántas veces al día alimentaría a su mascota?</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='descripcion'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'necesitamos conocer la respuesta'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="1">1</Select.Option>
                                    <Select.Option value="2">2</Select.Option>
                                    <Select.Option value="3">3</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button className="submit-form" type="btn btn-access" htmlType="submit">
                                    Enviar
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
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


            
        </>


    );
}

export default FormAdoption;