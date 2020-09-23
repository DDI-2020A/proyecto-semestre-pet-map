import React, {useEffect, useState} from 'react';
import '../styles/Galeria.less';
import {Card,  Row, Col, Button, Radio, Input, Pagination, Modal } from 'antd';
import {AudioOutlined, YoutubeOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Navigation from "../components/Navigation";
import Logo from '../images/logo.svg';
import Routes from "../constants/routes";
import {Layout} from 'antd';

const { Meta } = Card;
const { Search } = Input;
const { Header, Footer, Content } = Layout;


const Galeria = () => {


    const [base, setBase] = useState([]);
    const [Tipo, setTipo] = useState('');
    const [ID, setId] = useState('');
    const [Street, setStreet] = useState('');
    const [Image, setImage] = useState('');

    useEffect(() => {
        const getPet = async () => {
            const data = await fetch(`https://run.mocky.io/v3/2b0d9203-d2b9-4fe8-b362-294c68b12b89`);
            const jsonPet = await data.json();
            setBase(jsonPet);
            console.log('Mascotas', jsonPet);
        };
        getPet();
    }, [Tipo]);

    const handleVer = (tip, id, image, street) => {

        setId(id);
        setImage(image);
        setStreet(street);
        setTipo(tip);
        console.log('tipo', Tipo);
        console.log('id', ID);
        console.log('image', Image);
        console.log('street', street);

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
                <div className="search"> <span>CAREGORIAS:  </span>
                <Radio.Group name="radiogroup" defaultValue={3}>
                    <Radio value={1}>Perros</Radio>
                    <Radio value={2}>Gatos</Radio>
                    <Radio value={3}>Todos</Radio>
                </Radio.Group>

            </div>
            <Row justify="space-around">
                {
                    base.pet
                        ?base.pet.map((cat, index) => (
                            <Col span={6}>
                                <Card
                                    key={index}
                                    style={{width: 200}}
                                    cover={
                                        <img
                                            className='img'
                                            style={{width: 200}}
                                            alt=""
                                            src={cat.image}
                                        />
                                    }
                                >
                                    <Meta
                                        title={cat.type}
                                    />
                                    <button type="button" className="btn btn-primary" data-toggle="modal" onClick={ () => handleVer (cat.type, cat.id, cat.image, cat.street) }
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
                            <h5 className="modal-title" id="exampleModalLabel">{Tipo}</h5>
                        </div>
                        <div className="modal-body row">
                            <div className="col-6">
                                <img src={Image} alt=""/>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Información: {ID} </li>
                                    <br/>
                                    <li>Direccion: {Street}</li>
                                    <li>Barrio: </li>
                                    <li>Calle: </li>
                                    <li>Estado: </li>
                                    <li>Descripcion</li>
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="adopta btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className=" adopta btn btn-primary">Adoptar</button>
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