import React, {useEffect} from 'react';
import '../styles/RegisterPet.less'
import adopta from '../images/adopta.png'
import {Form, Input, Select, Upload, Button, message, Layout, Row, Col} from "antd";
import {UploadOutlined, InboxOutlined, YoutubeOutlined} from '@ant-design/icons';
import FIREBASE from "../firebase";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
const {Header, Footer, Content} = Layout;


const RegisterPet = () => {

    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const handleSubmit = async (values) =>{
        console.log('form', values);

        const image = values.foto[0].originFileObj;

        const uploadSnapshot = await FIREBASE.storage.ref('animals/' + values.foto[0].name + '_ ' + Date.now()).put(image);
        const imageURL = await uploadSnapshot.ref.getDownloadURL();
        console.log(imageURL);


        await FIREBASE.db.ref('AdoptionPet').push({
            ...values,
            foto: imageURL
        });
        message.success('Los datos se han registrado correctamente');
    }


    return(
        <>
            <Layout className="Layout">
                <Header className='main-header'>
                    <div className='logo'>
                        <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                    </div>
                    <Navigation />
                </Header>
                <Content className='main-content mb-3'>
                    <div className="main-reg">
                        <div className=" title-reg"><h3> AYUDA A UN NUEVO AMIGO A CONSEGUIR UN HOGAR </h3></div>
                        <div className="row">
                            <div className="col-5 photo">
                                <img src={adopta} alt="logo"/>
                            </div>
                            <div className="col-7 form-reg">
                                <Form
                                    name='pet-form'
                                    onFinish={handleSubmit}
                                >
                                    <Form.Item label="Foto">
                                        <Form.Item name="foto" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                                            <Upload.Dragger name="files" action="/upload.do">
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click para subir la foto del animalito</p>
                                            </Upload.Dragger>
                                        </Form.Item>
                                    </Form.Item>
                                    <Form.Item
                                        label='Tipo de animal"'
                                        name='tipo'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'este campo es requerido'
                                            }
                                        ]}
                                    >
                                        <Select>
                                            <Select.Option value="perro">Perro</Select.Option>
                                            <Select.Option value="gato">Gato</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label='Estado'
                                        name='estado'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'este campo es requerido'
                                            }
                                        ]}
                                    >
                                        <Select>
                                            <Select.Option value="enfermo">Enfermo</Select.Option>
                                            <Select.Option value="saludable">Saludable</Select.Option>
                                            <Select.Option value="desnutrido">Desnutrido</Select.Option>
                                            <Select.Option value="grave">Grave</Select.Option>

                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label='Barrio: '
                                        name='barrio'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'este campo es requerido'
                                            }
                                        ]}
                                    >
                                        <Input placeholder="en que barrio se encontro al animalito"/>
                                    </Form.Item>
                                    <Form.Item
                                        label='Calle: '
                                        name='calle'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'este campo es requerido'
                                            }
                                        ]}
                                    >
                                        <Input placeholder="en que calle se encontro al animalito"/>
                                    </Form.Item>
                                    <Form.Item
                                        label='Descripción: '
                                        name='descripcion'
                                        rules={ [
                                            {
                                                required: true,
                                                message: 'este campo es requerido'
                                            }
                                        ]}
                                    >
                                        <Input.TextArea placeholder="describe el aspecto del animalito"/>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                        <Button className="submit-pet" type="btn btn-access" htmlType="submit">
                                            Registrar
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
            </Layout>
        </>
    )
};

export default RegisterPet;