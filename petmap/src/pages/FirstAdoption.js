
import React, {useEffect} from 'react';
import "../styles/FirstAdop.less";
import { Form, Input, Select, Upload, Button , message, Row, Col, Layout} from "antd";
import {UserOutlined,SmileOutlined, EditOutlined, YoutubeOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import ROUTES from '../constants/routes';
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";
import no from "../images/Tom.svg";


const {Content,Footer,Header} = Layout;
const FirstAdoption = () => {

    //const handleSubmit   = async (values) =>{

    //}

  return (
<>
      <layout className='layout'>
          <Header className='main-header'>
              <div className='logo'>
                  <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
              </div>
              <Navigation />
          </Header>
          <Content className='main-content mb-3'>
              <div className="main-adop">
                  <Row justify='space-around' align="middle">
                      <Col span={8}>
                          <p>¿Desea Adoptar?<SmileOutlined /></p>
                          <p>Genial!!</p>
                          <p className="important_date"><strong>IMPORTANTE!</strong></p>
                          <p>Para poder adoptar es necesario que llene el formulario, el cual contará con preguntas que</p>
                          <p>consideramos relevantes para poder validar como aceptable al usuario, puesto que nos tomamos</p>
                          <p>muy enserio la vida de estos pequeños amigos que han sufrido bastante a la deriva de un mejor día</p>
                          <p>si está de acuerdo por favor presione en el botón "Ir al formulario" en caso de no estar de acuerdo</p>
                          <p>no podrá continuar con la adopción, puesto que la información solicitada es importante para seguir con el proceso.</p>
                          <p className="note"><strong>Nota</strong></p><p>En caso de no contar con los requisitos no podrá continuar con el proceso de adopción.</p>
                          < br/>
                          <Link to={Routes.FORMADOPTION}><Button type="btn btn-access" className="goto">Ir al formulario</Button></Link>

                      </Col>
                      <Col span={9}>

                          <img src={no} className="Tom" alt="Tom brave" id="adoppls"/>

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
      </layout>    
        
    </>

  );
};

export default FirstAdoption;
