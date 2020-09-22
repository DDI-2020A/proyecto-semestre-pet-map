import React from 'react';
import {Col, Row, Button} from 'antd';
import img3 from "../images/adoptame.svg";
import img2 from "../images/gatodonaciones.svg";
import "../styles/Home.less";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";




const Home = () => (

    <div>

        <Row justify='space-around' align='middle' className='home'>

            <Col><span><strong>
                <img className='adoptame' src={img3} alt="adoptame"/>
            </strong></span>
            </Col>
            <Col ><span><strong>
                <Link to={Routes.DONACIONES}><Button type="primary" className='buttonoption'>Donaciones</Button></Link>
                <Link to={Routes.ADOPCIONES}><Button type="primary" className='buttonoption'>Adopción</Button></Link>
                <Link to={Routes.REGISTROANIMAL}><Button type="primary" className='buttonoption' >Registro Animal</Button></Link>
            </strong></span>
            </Col>



        </Row>



    </div>


);

export default Home;