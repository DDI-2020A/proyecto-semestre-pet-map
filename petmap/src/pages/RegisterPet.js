import React, {useEffect} from 'react';
import '../styles/RegisterPet.less'
import adopta from '../images/adopta.png'
import { Form, Input, Select, Upload, Button , message} from "antd";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import FIREBASE from "../firebase";


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
                                <Button className="submit-pet" type="primary" htmlType="submit">
                                    Registrar
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </div>
        </>
    )
};

export default RegisterPet;