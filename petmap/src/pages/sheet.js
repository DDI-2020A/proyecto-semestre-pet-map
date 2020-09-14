import React from 'react';
import "../styles/sheet.less";
import {Button, Col,Layout, Row} from "antd";
import {EditOutlined} from '@ant-design/icons';


const {Content,Footer} = Layout;

const sheet = () => {
    return (
        <layout className='layout'>
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

export default sheet;
