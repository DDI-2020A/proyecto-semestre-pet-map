import React, {useEffect, useState} from 'react';
import '../styles/Adoptame.less'
import {Col, Layout, Row} from 'antd';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {YoutubeOutlined} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;


const Adoptame = () => {

    const [base, setBase] = useState([]);
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        const getPet = async () => {
            const data = await fetch(`https://run.mocky.io/v3/2b0d9203-d2b9-4fe8-b362-294c68b12b89`);
            const jsonPet = await data.json();
            setBase(jsonPet);
            console.log('Mascotas', jsonPet);
        };
        getPet();
    }, [tipo]);

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
                <div className="form">
                    <div className="center id "> TIPO: </div>
                    <div className="row">
                        <div className="col-6">
                            <h5 className="center"> ID </h5>
                            <img src="https://ichef.bbci.co.uk/news/ws/410/amz/worldservice/live/assets/images/2015/06/12/150612173542_mascota_promo_624x351_thinkstock.jpg" alt=""/>
                        </div>
                        <div className="col-6">
                            <br/><br/>
                            <p>ESTADO:</p>
                            <p>Ubicacion</p>
                            <p>Descrimpcion</p>
                        </div>
                        <div>
                            <button>Adoptar</button>
                            <button>Regresar</button>
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

export default Adoptame;