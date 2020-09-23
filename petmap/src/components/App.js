 import React from 'react';
import '../styles/App.less';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Layout, Row, Col, Button,Typography} from 'antd';
import Logo from '../images/logo.svg';
import Navigation from "./Navigation";
import Routes from "../constants/routes";
import AppRouter from "../routers/LinksPages";
import {YoutubeOutlined} from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

const App = () => {
    return (
        <Router>
            <Layout className='layout'>
                <Header className='main-header'>
                    <div>
                        <Link to={Routes.RAIZ}><img className="logo" src={ Logo } alt='PET MAP' /></Link>
                    </div>
                    <Navigation />
                </Header>
                <Content className='main-content mb-3'>
                    <AppRouter />
                </Content>
                <Footer className= 'main-footer'>
                    <Row justify='space-around' align="middle" className="footer">
                        <Col><span><strong>EPN</strong></span></Col>
                        <Col><span><strong>©Pet Map - Derechos reservados 2020</strong></span></Col>
                        <Col><span><strong><a href="https://www.youtube.com/channel/UC45-ro1DxP89Pzf5-oEtLFg" ><YoutubeOutlined className="youtube"
                        /></a></strong></span></Col>
                    </Row>
                </Footer>
            </Layout>
        </Router>
    );
};

export default App;