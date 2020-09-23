import React from "react";
import { Col, Row} from 'antd';
import "../styles/donaciones.less";
import imgdog from "../images/perrodonaciones.svg";
import imgcat from "../images/gatodonaciones.svg";
import { Button } from 'antd';

import Routes from "../constants/routes";
import {Link} from 'react-router-dom';



const Donaciones = () => (

    <div >
        <Row justify='space-around' align='middle' className='Contentd'>
            <Col><span><strong>
                <img  src={imgdog} alt="perrodonaciones" />
            </strong></span>
            </Col>

            <Col ><span><strong>
                 <h1>DONACIONES</h1>
                <div class="btn-group-vertical">
                    <Link to={Routes.DONACIONESFISICAS}><Button  className='buttonoptiond'>Donaciones físicas</Button></Link>
                    <Link to={Routes.DONACIONESTRANSFERENCIA}><Button  className='buttonoptiond'>Donaciones Transferencia bancaria</Button></Link>
                    <Link to={Routes.DONACIONESDEBITO}><Button className='buttonoptiond' >Donaciones Débito Bancario</Button></Link>
                </div>
            </strong></span>
            </Col>
            <Col><span><strong>
                <img  src={imgcat} alt="gatodonaciones"/>
            </strong></span>
            </Col>
            <p className='paragraphfrase'>A veces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar seria menos si le faltara esa gota
                (Madre Teresa de Calcuta).</p>
        </Row>


    </div>
);

export default Donaciones;
