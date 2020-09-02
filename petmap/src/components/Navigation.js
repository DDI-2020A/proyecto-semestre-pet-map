import React, {useState, useEffect} from 'react';
import {Menu} from "antd";
import {HomeOutlined,FormOutlined,NotificationOutlined,ApartmentOutlined,SmileOutlined,QuestionCircleOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;


const Navigation=()=>{

    const [current, setCurrent] = useState('home');

    return(
        //Otorgamos las caracteristicas para el Menu
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
            <SubMenu icon={<ApartmentOutlined />} title='servicios'>
                <Menu.Item key="donaciones">Donaciones</Menu.Item>
                <Menu.Item key="adopcion">Adopción</Menu.Item>
                <Menu.Item key="registroA">Registro Animal</Menu.Item>
            </SubMenu>
            <Menu.Item key='derechos' icon={<SmileOutlined />}>
                Derechos Animales
            </Menu.Item>
            <Menu.Item key='about' icon={<QuestionCircleOutlined />}>
                ¿Quienes Somos?
            </Menu.Item>
    </Menu>
    );
};

export default Navigation;