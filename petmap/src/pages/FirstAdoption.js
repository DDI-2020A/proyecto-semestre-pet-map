import React from 'react';
import "../styles/FirstAdop.less";
import {Button, Col, Layout, Row, Input, Form, Checkbox} from "antd";
import {UserOutlined,EditOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import ROUTES from '../constants/routes';


const {Content} = Layout;

const FirstAdoption = () => {

    const validatesuccess = (success)=> {
        console.log('success',success);
    }
    const validaterror = (error) =>{
        console.log('error',error);
    }

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
      </layout>

  );
};

export default FirstAdoption;
