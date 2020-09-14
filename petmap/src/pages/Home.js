import React from "react";
import {Card, Col, Row} from "antd";
import img3 from "../images/adoptame.svg";


const Home = () => (

        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        <img src={img3} alt="adoptame"/>
                    </Card>np
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>





);

export default Home;