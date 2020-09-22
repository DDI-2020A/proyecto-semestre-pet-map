import React, {useState} from 'react';
import "../styles/Raiz.less";
import {Modal, Button, Col, Row, Typography, message,} from "antd";
import img1 from "../images/Captura1.svg";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import FormRegistro from "../components/FormRegistro";
import FIREBASE from "../firebase";

const {Title} =Typography;

const Raiz = () => {


    const [ modalVisible, setModalVisible ] = useState( false );

    const handleVisibleModal = () => {
        setModalVisible(true);
    };
    const handleNoVisibleModal = () => {
        setModalVisible(false);
    };
    const handleCreateUser = async( values ) => {
        console.log( 'form values', values );
        await FIREBASE.db.ref( `users` ).push( {

            email: values.email.toLowerCase(),
            password: values.password,
            nombre: values.nombre.toUpperCase(),
            apellido: values.apellido,
            telefono: values.telefono,

        } );
        message.success( 'Los datos se guardaron correctamente :)' );
    };
    return(
        <>
            <Row>
                <Col span = {15}>
                    <div className='imgPp'>
                        <img src={img1} alt="PerroGato"/>
                    </div>
                </Col>
                <Col span = {9}>
                    <div className='box'>
                        <div className='boxCenter'>
                            <Title className='title1'>PET  MAP</Title>
                            <Title level = {2} className='title2 '>TU ACCIÓN PUEDE CAMBIAR VIDAS</Title>

                            <Button type="btn btn-access" shape="round" onClick={handleVisibleModal}>REGISTRARSE</Button><br/><br/>
                            <Modal
                                title='Registro '
                                visible={ modalVisible }
                                onRegistrar={ () => setModalVisible( false ) }
                                onCancel={ () => setModalVisible( false ) }
                                width={ 900 }
                                footer={ null }
                                destroyOnClose
                            >
                                <div className="formuRegistro">
                                    <FormRegistro onRegister={handleCreateUser}/>
                                </div>

                            </Modal>

                            <Button type="btn btn-access" shape="round" >
                                <Link to={Routes.INICIOSESION} >INICIAR SESIÓN</Link>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    );
};
export default Raiz;



