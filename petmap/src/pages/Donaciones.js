import React from "react";
import { Col, Row} from 'antd';
import "../styles/donaciones.less";
import img1 from "../images/perrodonaciones.svg";
import img2 from "../images/gatodonaciones.svg";
import { Button } from 'antd';

import Routes from "../constants/routes";
import {Link} from 'react-router-dom';



const Donaciones = () => (

    <div >
        <Row justify='space-around' align='middle' >
            <Col><span><strong>
                <img src={img1} alt="perrodonaciones"/>

            </strong></span>
            </Col>

            <Col ><span><strong>
                 <h1>DONACIONES</h1>
                    <Link to={Routes.DONACIONESFISICAS}><Button  className='buttonoption'>Donaciones físicas</Button></Link>
                    <Link to={Routes.DONACIONESTRANSFERENCIA}><Button  className='buttonoption'>Donaciones Transferencia bancaria</Button></Link>
                    <Link to={Routes.DONACIONESDEBITO}><Button className='buttonoption' >Donaciones Débito Bancario</Button></Link>
            </strong></span>
            </Col>

        </Row>
        <p className='paragraphfrase'>A veces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar seria menos si le faltara esa gota
            (Madre Teresa de Calcuta).</p>

    </div>
);

export default Donaciones;
