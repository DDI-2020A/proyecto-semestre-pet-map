import React from 'react';

import '../styles/App.less';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Layout, Row, Col, Button,Typography, Breadcrumb} from 'antd';

import logo from '../images/Logo.PNG';
import img1 from '../images/Captura1.PNG';
import Navigation from "./Navigation";
import Routes from "../constants/routes";


const { Header, Footer, Content } = Layout;
const {Title} =Typography;


const App = () => {

    return (
        <Router>
            <Layout className='layout'>
              <Header className='main-header'>
                  <div className='logo'>
                      <img src={ logo } alt='PET MAP' />
                  </div>

                  <Navigation />
              </Header>
              <Content className='main-content mb-3'>
                <Row>
                    <Col span = {15}>
                        <div className='imgPp'>
                            <img src={img1} alt="PerroGato"/>
                        </div>
                    </Col>
                    <Col span = {9}>
                        <div className='box'>
                            <div className='boxCenter'>
                                <Title className='title1'>PET  MAP</Title>
                                <Title level = {2} className='title2 '>TU ACCIÓN PUEDE CAMBIAR VIDAS</Title>

                                <Link to={Routes.REGISTER}><Button type="primary" shape="round" >
                                    REGISTRARSE
                                </Button></Link><br/><br/>
                                <Button type="primary" shape="round" >
                                    INICIAR SESIÓN
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
              </Content>
              <Footer className= 'main-footer'>
                  <div ><Title level = {3} > Pet Map - Derechos reservados 2020 </Title></div>
              </Footer>

            </Layout>
        </Router>
        );
};

export default App;
