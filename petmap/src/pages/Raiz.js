import React, {useState} from 'react';
import "../styles/Raiz.less";
import  {Modal,Button, Col, Row, Typography,} from "antd";
import img1 from "../images/Captura1.svg";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import FormRegistro from "../components/FormRegistro";

const {Title} =Typography;

const Raiz = () => {


    const [ modalVisible, setModalVisible ] = useState( false );

    const handleVisibleModal = () => {
        setModalVisible(true);
    };
    return(<div>
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
                            onOk={ () => setModalVisible( false ) }
                            onCancel={ () => setModalVisible( false ) }
                            width={ 900 }
                            footer={ null }
                        >
                            <div className="formuRegistro">
                                <FormRegistro/>
                            </div>

                        </Modal>

                        <Button type="btn btn-access" shape="round" >
                            <Link to={Routes.INICIOSESION} >INICIAR SESIÓN</Link>
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>

    </div>
);
};
export default Raiz;

