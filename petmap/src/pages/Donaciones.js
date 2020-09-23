import React from "react";
import {Col, Layout, Row} from 'antd';
import "../styles/donaciones.less";
import img1 from "../images/perrodonaciones.svg";
import img2 from "../images/gatodonaciones.svg";
import { Button } from 'antd';

import Routes from "../constants/routes";
import {Link} from 'react-router-dom';
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import {YoutubeOutlined} from "@ant-design/icons";

const {Header, Footer, Content} = Layout;

const Donaciones = () => {

    return(
          <>
              <Layout className="Layout">
                  <Header className='main-header'>
                      <div className='logo'>
                          <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                      </div>
                      <Navigation />
                  </Header>
                  <Content className='main-content mb-3'>
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
};

export default Donaciones;
