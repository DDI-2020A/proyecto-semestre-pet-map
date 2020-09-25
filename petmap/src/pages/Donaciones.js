import React from "react";
import {Col, Layout, Row, Typography, Button} from 'antd';
import "../styles/donaciones.less";
import Routes from "../constants/routes";
import {Link} from 'react-router-dom';
import Logo from "../images/logo.svg";
import imgdog from "../images/perrodonaciones.svg";
import Navigation from "../components/Navigation";
import {YoutubeOutlined} from "@ant-design/icons";

const {Header, Footer, Content} = Layout;
const {Title} =Typography;

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
                      <div align='middle'>
                          <Row >
                              <Col span={15} offset={5}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          <Row justify='space-around' align='middle' className='Contentd'>
                              <Col span={12}>
                                <img src={imgdog} className="adog" alt="perrodonaciones" />
                              </Col>

                              <Col span={12} className="donationd">
                                    <h1 >DONACIONES</h1>
                                    <div className="btn-group-vertical">
                                        <Link to={Routes.DONACIONESFISICAS}><Button type="btn btn-access"
                                            className='buttonoptiond'>Donaciones físicas</Button></Link>
                                        <Link to={Routes.DONACIONESTRANSFERENCIA}><Button type="btn btn-access" className='buttonoptiond'>Donaciones Transferencia bancaria</Button></Link>
                                        <Link to={Routes.DONACIONESDEBITO}><Button type="btn btn-access"
                                            className='buttonoptiond'>Donaciones Débito Bancario</Button></Link>
                                        <p className='paragraphfrase'>A veces sentimos que lo que hacemos es tan solo una gota en
                                            el mar, pero el mar seria menos si le faltara esa gota
                                            (Madre Teresa de Calcuta).</p>
                                    </div>
                              </Col>
                          </Row>
                              </Col>
                          </Row>

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
