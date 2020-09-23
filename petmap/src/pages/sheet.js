import React from 'react';
import "../styles/sheet.less";
import {Button, Col,Layout, Row} from "antd";
import {EditOutlined, YoutubeOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import Logo from "../images/logo.svg";
import Navigation from "../components/Navigation";


const {Content,Footer,Header} = Layout;

const sheet = () => {
    return (
        <layout className='layout'>
            <Header className='main-header'>
                <div className='logo'>
                    <Link to={Routes.RAIZ}><img src={ Logo } alt='PET MAP' /></Link>
                </div>
                <Navigation />
            </Header>
            <Content className='main-content mb-3'>
                <Row>
                    <Col span={24}>
                        <div className='presentation'>
                            <Row>
                                <Col span={12}><h1 className='maintitle'>Ficha de Adopción <EditOutlined /></h1></Col>
                            </Row>

                            <Row className='form'>
                                <Col span={24}>

                                    <br />

                                    <Button type={'primary'}> Terminar </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

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

    );
}

export default sheet;
