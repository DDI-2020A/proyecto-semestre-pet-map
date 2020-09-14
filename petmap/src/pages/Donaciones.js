import React from "react";
import { Card, Col, Row, paragraph} from 'antd';
import img1 from "../images/perrodonaciones.svg";
import img2 from "../images/gatodonaciones.svg";
import { Button } from 'antd';
import donacion from "../styles/donaciones.less";



const Donaciones = () => (

    <div className="site-card-wrapper">


        <Row gutter={16}>
            <Col span={8}>
                <Card  className='card '>
                    <img src={img1} alt="perrodonaciones"/>
                </Card>
            </Col>
            <Col span={8}>
                <Card  className='card'>
                    <h1>DONACIONES</h1>
                    <Button type="primary" className='buttonoption'>Donaciones físicas</Button>
                    <Button type="primary" className='buttonoption'>Donaciones Transferencia bancaria</Button>
                    <Button type="primary" className='buttonoption'>Donaciones Débito bancario</Button>
                    <paragraph classname='paragraphfrase'>A veces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar seria menos si le faltara esa gota</paragraph>
                    <paragraph>(Madre Teresa de Calcuta).</paragraph>


                </Card>
            </Col>
            <Col span={8}>
                <Card  className='card '>
                    <img src={img2} alt="gatodonaciones"/>
                </Card>
            </Col>
        </Row>
    </div>


);

export default Donaciones;
