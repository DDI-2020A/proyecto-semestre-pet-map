import React, {useState, useEffect} from 'react';

import '../styles/App.css';
import {Layout, Menu, Row, Col, Button} from 'antd';
import logo from '../images/Logo.PNG';
import img1 from '../images/perrogato.jpeg';
import {HomeOutlined,FormOutlined,NotificationOutlined,ApartmentOutlined,SmileOutlined,QuestionCircleOutlined} from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

const App=()=> {


    const [current, setCurrent] = useState('home');

    return (

        <Layout>
          <Header className='main-header'>
              <div className='logo'>
                  <img src={ logo } alt='PET MAP' />
              </div>
              <Menu className='main-menu'
                    onClick={(e)=>setCurrent(e.key)}
                    selectedKeys={[current]}
                     mode='horizontal'>
                  <Menu.Item key='home' icon={<HomeOutlined />}>
                      Home
                  </Menu.Item>
                  <Menu.Item key='registro' icon={<FormOutlined />}>
                      Registro Adopción
                  </Menu.Item>
                  <Menu.Item key='noticias' icon={<NotificationOutlined />}>
                      Noticias
                  </Menu.Item>
                  <Menu.Item key='servicios' icon={<ApartmentOutlined />}>
                      Servicios
                  </Menu.Item>
                  <Menu.Item key='derechos' icon={<SmileOutlined />}>
                      Derechos Animales
                  </Menu.Item>
                  <Menu.Item key='about' icon={<QuestionCircleOutlined />}>
                      ¿Quienes Somos?
                  </Menu.Item>
              </Menu>
          </Header>
          <Content className='main-content'>
            <Row>
                <Col span = {15}>
                    <div className='imgPp'>
                        <img src={img1} alt="PerroGato"/>
                    </div>
                </Col>
                <Col span = {9}>
                    <div className='box'>
                        <h1>PET <br/> MAP</h1>
                        <h3>Tu acción puede cambiar vidas</h3>
                        <Button type="primary">REGISTRARSE</Button><br/>
                        <Button type="primary">INICIAR SESIÓN</Button>
                    </div>
                </Col>
            </Row>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
        );
};

export default App;
