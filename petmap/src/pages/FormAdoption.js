import React, {useState,useEffect}from 'react';
import "../styles/forms.less";
import {Input, Button, Col, Layout, Row, Checkbox, Form, Select, message} from "antd";
import {Link} from 'react-router-dom';
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {EditOutlined, DingtalkOutlined, DeploymentUnitOutlined, YoutubeOutlined} from '@ant-design/icons';
import no from "../images/noIg.svg";
import FIREBASE from "../firebase";

const {Content,Footer,Header} = Layout;

const FormAdoption = () => {

    const [user,setUsers] = useState(
        []
    );

    const handleSubmitForm = async (values) =>{
        console.log('form', values);
            await FIREBASE.db.ref('Formularios').push({
                ...values,
        });
        message.success('Los datos se han registrado correctamente');
        alert('Los datos ingresados están en proceso de validación, por favor espere un mensaje de confirmación al correo que ingresó');
    }
    /*
    const handleSearchEmail = async () =>{
        let email=FIREBASE.auth().currentUser.email;
        //await FIREBASE.auth().currentUser.email;
        return FIREBASE.database().ref('/email/' + email).once('value').then(function(snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            // ...
        });

    }*/
    const handleSearchEmail = async () =>{
        const emailI = document.querySelector('#searchE').value ;
        FIREBASE.db.ref('users').once('value')
            .then((snapshot) =>{
                const users = [];
                snapshot.forEach( ( data ) =>{
                    console.log('users', data.val());
                    const user = data.val();
                    const userId = data.key;
                    users.push({
                        key: userId,
                        apellido: user.apellido,
                        email: user.email,
                        nombre: user.nombre,
                        telefono: user.telefono
                    })
                    if(emailI === user.email){

                        message.success('Usuario validado')
                    }
                });
                console.log('Users values', users )
            });
    }
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
                <div className="main-title"><h3> Registro de Adopción <EditOutlined/></h3></div>
                <div className="row">
                    <div className="col-5 photo">
                        <img src={no} alt="adoption"/>
                    </div>
                    <div className="col-7 form-reg">
                        <Form
                            name='pet-form'
                            onFinish={handleSubmitForm}
                        >
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='Correo de usuario'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'Necesitamos conocer la respuesta'
                                    }
                                ]}
                            >
                                <Input placeholder="Ingrese su correo" id="searchE"/>
                            </Form.Item>
                            <Button className="search-email" type="btn btn-access btn-lg" onClick={handleSearchEmail }>Verificar</Button>
                            <p>¿Ha tenido mascotas con anterioridad?</p>
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
                            <p>¿Cuenta con espacio suficiente en su vivienda para tener una mascota?</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='r4'
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
                                name='r5'
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
                            <p>¿Por qué quiere adoptar? (IMPORTANTE)</p>
                            <Form.Item
                                label={<DeploymentUnitOutlined />}
                                name='r6'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'necesitamos conocer la respuesta'
                                    }
                                ]}
                            >
                                <Input.TextArea placeholder="Escriba su respuesta"/>
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