import React from 'react';
import "../styles/App.less";
import {Button, Col,Layout, Row, Input} from "antd";
import {UserOutlined,EditOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Route} from "react-router-dom";
import forms from "./First_adop";

const {Content,Footer} = Layout;

const First_adop = () => {
  return (
      <layout className='layout'>
        <Content className='main-content mb-3'>
          <Row>
            <Col span={24}>
              <div className='presentation'>
                  <Row>
                      <Col span={12}><h1 className='maintitle'>Pet Map</h1></Col>
                      <Col span={12}><h1 className='secondtitle'>Adopción <EditOutlined /></h1></Col>
                  </Row>

                  <Row className='form'>
                      <Col span={6}>
                          <p>¿Deseas Adoptar? Genial!!!</p>
                          <p>Por favor ingresa los siguiente datos,</p>
                          <p>nos tomamos muy enserio la vida de estos amigos</p>
                          <br />
                          <Input size="large" placeholder="Apellido" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" placeholder="Nombre"prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" placeholder="C.I"prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" placeholder="Correo"prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Button className={"ingreso"} type="primary" >Ingresar</Button>
                      </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </Content>
          <Footer className={"footer"}>
              <Row>
                  <Col span={8}><p>0960625886</p></Col>
                  <Col span={8}><p>Pet Map - Derechos Reservados</p></Col>
                  <Col span={8}><p>You tube</p></Col>
              </Row>
          </Footer>
      </layout>

  );
}

export default First_adop;
