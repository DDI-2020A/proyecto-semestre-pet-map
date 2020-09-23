import React from 'react';
import "../styles/FirstAdop.less";
import {Button, Col, Layout, Row, Input, Form, Checkbox} from "antd";
import {UserOutlined, EditOutlined, YoutubeOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import ROUTES from '../constants/routes';
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";


const {Content,Footer,Header} = Layout;

const FirstAdoption = () => {

    const validatesuccess = (success)=> {
        console.log('success',success);
    }
    const validaterror = (error) =>{
        console.log('error',error);
    }

  return (
      <layout className='layout'>
          <Header className='main-header'>
              <div className='logo'>
                  <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
              </div>
              <Navigation />
          </Header>
          <Content className='main-content mb-3'>
          <Row>
            <Col span={24}>
              <div className='presentation'>
                  <Row>
                      <Col span={24}><h1 className='secondtitle'>Adopción <EditOutlined /></h1></Col>
                  </Row>

                  <Row className='form'>
                      <Col span={6}>
                          <p>¿Deseas Adoptar? Genial!!!</p>
                          <p>Por favor ingresa los siguiente datos,</p>
                          <p>nos tomamos muy enserio la vida de estos amigos</p>
                          <br />
                          <Input size="large" type="color:black" placeholder="Apellido" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" type="color:black" placeholder="Nombre" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" type="color:black" placeholder="C.I" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" type="color:black" placeholder="Correo" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Button className={"ingreso"} type="btn btn-access" ><Link to={ROUTES.FORMADOPTION}>Ingresar</Link></Button>
                      </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer className= 'main-footer'>
              <Row justify='space-around' align="middle" className="footer">
                  <Col><span><strong>EPN</strong></span></Col>
                  <Col><span><strong>©Pet Map - Derechos reservados 2020</strong></span></Col>
                  <Col><span><strong><a href="https://www.youtube.com/channel/UC45-ro1DxP89Pzf5-oEtLFg" ><YoutubeOutlined className="youtube"
                  /></a></strong></span></Col>
              </Row>
        </Footer>
      </layout>

  );
};

export default FirstAdoption;
