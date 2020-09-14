import React from 'react';

import '../styles/App.less';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Layout, Row, Col, Button,Typography} from 'antd';

import logo from '../images/Logo.PNG';
import Navigation from "./Navigation";
import Routes from "../constants/routes";
import AppRouter from "../routers/LinksPages";
import {YoutubeOutlined} from '@ant-design/icons';


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
                    <div>
                        <Row>
                            <Col span={12}><p> Pet Map - Derechos reservados 2020 </p></Col>
                            <Col span={12}><a href="https://www.youtube.com/channel/UC45-ro1DxP89Pzf5-oEtLFg" ><YoutubeOutlined className="youtube"/></a></Col>
                        </Row>
                    </div>
                </Footer>

            </Layout>
        </Router>
    );
};

export default App;