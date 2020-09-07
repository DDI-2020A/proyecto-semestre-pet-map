import React, {useState, useEffect} from 'react';
import {Menu} from "antd";
import {Link} from 'react-router-dom';
import Routes from "../constants/routes";
import {HomeOutlined,FormOutlined,NotificationOutlined,ApartmentOutlined,SmileOutlined,QuestionCircleOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;


const Navigation=()=>{

    const [current, setCurrent] = useState('home');

    return(

        <Menu className='main-menu'
          onClick={(e)=>setCurrent(e.key)}
          selectedKeys={[current]}
          mode='horizontal'>

            <Menu.Item key='home' icon={<HomeOutlined />}>
                <Link to={Routes.HOME}>Home</Link>
            </Menu.Item>
            <Menu.Item key='registro' icon={<FormOutlined />}>
                Registro Adopción
            </Menu.Item>
            <Menu.Item key='noticias' icon={<NotificationOutlined />}>
                Noticias
            </Menu.Item>
            <SubMenu icon={<ApartmentOutlined />} title='servicios'>
                <Menu.Item key="donaciones"><Link to={Routes.DONACIONES}>Donaciones</Link></Menu.Item>
                <Menu.Item key="adopcion"><Link to={Routes.ADOPCIONES}>Adopción</Link></Menu.Item>
                <Menu.Item key="registroA">Registro Animal</Menu.Item>
            </SubMenu>
            <Menu.Item key='derechos' icon={<SmileOutlined />}><Link to={Routes.DERECHOS}></Link>
                Derechos Animales
            </Menu.Item>
            <Menu.Item key='about' icon={<QuestionCircleOutlined />}>
                ¿Quienes Somos?
            </Menu.Item>
    </Menu>
    );
};

export default Navigation;