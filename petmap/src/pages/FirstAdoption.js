import React from 'react';
import "../styles/First_adop.less";
import {Button, Col,Layout, Row, Input} from "antd";
import {UserOutlined,EditOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import ROUTES from '../constants/routes';


const {Content} = Layout;

const FirstAdoption = () => {

  return (
      <layout className='layout'>
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
                          <Input size="large" placeholder="Apellido" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" placeholder="Nombre" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" placeholder="C.I" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Input size="large" placeholder="Correo" prefix={<UserOutlined />} />
                          <br /><br /><br />
                          <Button className={"ingreso"} type="primary" ><Link to={ROUTES.FORMADOPTION}>Ingresar</Link></Button>
                      </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </Content>
      </layout>

  );
};

export default FirstAdoption;
