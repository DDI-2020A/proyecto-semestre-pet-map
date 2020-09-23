import React, {useEffect, useState} from 'react';
import '../styles/Galeria.less';
import {Card,  Row, Col, Button, Radio, Input, Pagination, Modal } from 'antd';
import {AudioOutlined, YoutubeOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Navigation from "../components/Navigation";
import Logo from '../images/logo.svg';
import Routes from "../constants/routes";
import {Layout} from 'antd';
import FIREBASE from "../firebase";

const { Meta } = Card;
const { Search } = Input;
const { Header, Footer, Content } = Layout;


const Galeria = () => {


    const [base, setBase] = useState([]);
    const [tipo, setTipo] = useState('');
    const [calle, setCalle] = useState('');
    const [barrio, setBarrio] = useState('');
    const [image, setImage] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState('');

    useEffect( () =>{
        const getAnimal = async() =>  {
            FIREBASE.db.ref('AdoptionPet').once('value')
                .then((snapshot) =>{
                    const petData = [];
                    snapshot.forEach( ( data ) =>{
                        console.log('animals', data.val());
                        const pets = data.val();
                        const petsId = data.key;
                        petData.push({
                            key: petsId,
                            type: pets.tipo,
                            photo: pets.foto,
                            street: pets.calle,
                            address: pets.barrio,
                            state: pets.estado,
                            description: pets.descripcion

                        });
                    });
                    console.log('datos', petData )
                    setBase( petData );
                });

        };
        getAnimal();
    },[]);

    const handleVer = (fotoPet, tipoPet, callePet, barrioPet, estadoPet, descripcionPet ) => {
        setTipo( tipoPet );
        setCalle( callePet );
        setBarrio( barrioPet);
        setImage( fotoPet );
        setDescripcion( descripcionPet );
        setEstado( estadoPet);

        console.log('tipo', tipo);
        console.log('barrio', barrio );
        console.log('calle', calle );
        console.log('descripcion', descripcion);

    }

    return (
        <>
            <Layout className="Layout">
            <Header className='main-header'>
                <div className='logo'>
                    <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                </div>
                <Navigation />
            </Header>
            <Content className='main-content mb-3'>
                <div className="Gal"> <span>GALERÍA DE ANIMALITOS REGISTRADOS</span></div>
                <Row justify="space-around">
                    {
                        base
                            ?base.map((pet, index) => (
                                <Col  className="card" span={6}>
                                    <Card
                                        key={index}
                                        style={{width: 200}}
                                        cover={
                                            <img
                                                className='img'
                                                style={{width: 170, height:170}}
                                                alt=""
                                                src={pet.photo}
                                            />
                                        }
                                    >
                                        <Meta
                                            title={pet.type}
                                        />
                                        <button type="button" className="btn btn-primary" data-toggle="modal" onClick={ () => handleVer (pet.photo, pet.type, pet.street, pet.address,pet.state,pet.description) }
                                                data-target="#exampleModal">
                                            Ver mas..
                                        </button>

                                    </Card>
                                </Col>
                            ))
                            : "Cargando...."
                    }

                </Row>
                <Pagination defaultCurrent={1} total={10} />


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{tipo}</h5>
                            </div>
                            <div className="modal-body row">
                                <div className="col-6">
                                    <img className="card-modal" src={image} alt=""/>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>Información: </li>
                                        <br/>
                                        <li>Direccion: </li>
                                        <li>Barrio: {barrio}</li>
                                        <li>Calle: {calle}</li>
                                        <li>Estado: {estado} </li>
                                        <li>Descripcion: {descripcion} </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="adopta btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <Link to={Routes.FIRSTADOPTION}><button type="button" className=" adopta btn btn-primary">Adoptar</button></Link>
                            </div>
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
    );
}

export default Galeria;