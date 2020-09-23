import React, {useEffect, useState} from 'react';
import '../styles/Galeria.less';
import {Card,  Row, Col, Button, Radio, Input, Pagination, Modal } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import FIREBASE from "../firebase";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";

const { Meta } = Card;
const { Search } = Input;



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
            <div className="search"> <span>CAREGORIAS:  </span>
                <Radio.Group name="radiogroup" defaultValue={3}>
                    <Radio value={1}>Perros</Radio>
                    <Radio value={2}>Gatos</Radio>
                    <Radio value={3}>Todos</Radio>
                </Radio.Group>

            </div>
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


        </>
    );
}

export default Galeria;