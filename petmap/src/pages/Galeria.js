import React, {useEffect, useState} from 'react';
import '../styles/Galeria.css';
import {Card,  Row, Col, Button, Radio, Input, Pagination  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


const { Meta } = Card;
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

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
    }

    return (
        <>
            <div className="search"> <span>CAREGORIAS:  </span>
                <Radio.Group name="radiogroup" defaultValue={2}>
                    <Radio value={1}>Perros</Radio>
                    <Radio value={2}>Gatos</Radio>
                    <Radio value={3}>Todos</Radio>
                </Radio.Group>
                <Search placeholder="Dirección" onSearch={value => console.log(value)} enterButton />

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
                                        description={cat.id}
                                    />
                                    <Button type="primaty" onClick={ () => handleVer (cat.type, cat.id, cat.image, cat.street) } >Ver </Button>
                                </Card>
                            </Col>
                        ))
                        : "Cargando...."
                }

            </Row>
            <Pagination defaultCurrent={1} total={10} />

        </>
    );
}

export default Galeria;