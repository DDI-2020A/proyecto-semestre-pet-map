import React from 'react';

import '../styles/App.less';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Layout, Row, Col, Button,Typography} from 'antd';

import logo from '../images/Logo.PNG';
import Navigation from "./Navigation";
import Routes from "../constants/routes";
import AppRouter from "../routers/LinksPages";


const { Header, Footer, Content } = Layout;
const {Title} =Typography;


const App = () => {

    return (
        <Router>
            <Layout className='layout'>
                <Header className='main-header'>
                    <div className='logo'>
                        <Link to={Routes.RAIZ}><img src={ logo } alt='PET MAP' /></Link>
                    </div>

                    <Navigation />
                </Header>
                <Content className='main-content mb-3'>
                    <AppRouter />
                </Content>
                <Footer className= 'main-footer'>
                    <div ><Title level = {3} > Pet Map - Derechos reservados 2020 </Title></div>
                </Footer>

            </Layout>
        </Router>
    );
};

export default App;