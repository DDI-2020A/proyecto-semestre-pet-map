import React, {useState, useEffect} from 'react';
import  {Menu,Button} from "antd";
import {Link} from 'react-router-dom';
import Routes from "../constants/routes";
import {HomeOutlined,ImportOutlined,FormOutlined,NotificationOutlined,ApartmentOutlined,SmileOutlined,QuestionCircleOutlined} from '@ant-design/icons';
import FIREBASE from "../firebase";
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
                <Link to={Routes.ADOPTA}>Adopción</Link>
            </Menu.Item>
            <SubMenu icon={<ApartmentOutlined />} title='Servicios'>
                <Menu.Item key="donaciones"><Link to={Routes.DONACIONES}>Donaciones</Link></Menu.Item>
                <Menu.Item key="registroA"><Link to={Routes.REGISTROANIMAL}>Registro Animal</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key='derechos' icon={<SmileOutlined />}><Link to={Routes.DERECHOS}></Link>
                Derechos Animales
            </Menu.Item>
            <Menu.Item key='mision' icon={<QuestionCircleOutlined />} > <Link to={Routes.MISION}>
                ¿Quienes Somos?</Link>
            </Menu.Item>
            <Menu.Item key='logout' icon={<ImportOutlined />} >
                <Button type='link' onClick={ () => FIREBASE.auth.signOut() }>Logout</Button>
            </Menu.Item>


        </Menu>
    );
};

export default Navigation;
